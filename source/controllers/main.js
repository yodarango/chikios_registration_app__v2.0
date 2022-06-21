// config
import express from "express";
const router = express.Router();

router.use(express.json({ limit: "3mb" }));
router.use(express.urlencoded({ extended: false }));

// ----------- middleware
import { generateAccessToken } from "../helpers/auth/sign_new_token.js";
import { isUserLoggedIn } from "../helpers/auth/is_user_logged_in.js";

// ----------- models
import { Organization } from "../db/models/organization.js";

// ----------- dependecies
import bcrypt, { hash } from "bcrypt";

router.get("/", (req, res) => {
  res.render("index");
});

// login route
router.get("/login", isUserLoggedIn, (req, res) => {
  res.render("login");
});

// login route
router.get("/register", isUserLoggedIn, (req, res) => {
  res.render("register");
});

// ----------------- post routes ---------

router.post("/register", async (req, res) => {
  try {
    const emailExists = await Organization.find({
      admin_email: `${req.body.admin_email}`,
    });
    const usernameExists = await Organization.find({
      username: `${req.body.username}`,
    });

    // check if email exists
    if (emailExists.length > 0) {
      res.send({ error: 1 });
      return;
    }

    // check if username exists
    if (usernameExists.length > 0) {
      res.send({ error: 2 });
      return;
    }

    const hashedPassword = await bcrypt.hash(`${req.body.admin_password}`, 8);

    // everything is good proceed to sign up the user
    const newOrg = new Organization({
      ...req.body,
      admin_password: hashedPassword,
    });

    const organization = await newOrg.save();

    if (!organization) {
      res.send("Something went wrong!");
      return;
    }
    const newToken = await generateAccessToken({
      email: organization.admin_email,
      username: organization.username,
    });

    res.send({ token: newToken });
  } catch (error) {
    console.log(error);
    res.send(`Error:`, error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Organization.findOne({
      username: `${req.body.username}`,
    });

    if (!user) {
      res.send({ error: 1 });
      return;
    }

    const passMatch = await bcrypt.compare(
      req.body.admin_password,
      user.admin_password
    );

    if (!passMatch) {
      res.send({ error: 1 });
      return;
    }

    if (passMatch) {
      const token = await generateAccessToken({
        username: user.username,
        email: user.admin_email,
      });
      res.send({ token });
    }
  } catch (error) {
    console.log(error);
    res.send({ error: 2 });
  }
});

export default router;
