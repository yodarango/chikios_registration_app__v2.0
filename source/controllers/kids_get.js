// config
import express from "express";
const router = express.Router();

// midleware
import { authenticateToken } from "../helpers/auth/authenticate_token.js";

// models
import { Kid } from "../db/models/kid.js";

// ---------- get request
router.get("/", authenticateToken, async (req, res) => {
  try {
    if (req.query.lastname) {
      const lastname = `${req.query.lastname.toLocaleLowerCase()}`;
      console.log(req.query.lastname);
      const count = await Kid.count();
      const kids = await Kid.find({ last_name: { $regex: lastname } });
      res.render("admin", { kids, count });

      return;
    }

    const count = await Kid.count();
    const kids = await Kid.find({})
      .sort({ first_name: 1 })
      .limit(10)
      .skip(req.query.skip);
    res.render("admin", { kids, count });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const kids = await Kid.find({ _id: req.params.id });
      res.render("admin", { kids, count: 0 });
    }
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});
export default router;
