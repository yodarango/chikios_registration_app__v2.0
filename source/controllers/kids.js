// config
import express from "express";
const router = express.Router();
import cors from "cors";

// parse body
router.use(express.json({ limit: "3mb" }));
router.use(express.urlencoded({ extended: false }));

// models
import { Kid } from "../db/models/kid.js";

router.use(cors());
// ---------- get request
router.post("/register", async (req, res, next) => {
  const newKid = new Kid({
    ...req.body,
    created: new Date(),
    registration: {
      checked_in: false,
      checked_in_at: null,
      checked_out_by: null,
      checked_out_at: null,
    },
    metadata: {
      organization: "ALJC",
    },
  });
  try {
    const kid = await newKid.save();
    console.log(kid);
    res
      .status(200)
      .send({ success: "child successfully registered", id: kid._id });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.post("/check_in/:id", async (req, res) => {
  try {
    const kid = await Kid.findOne({ _id: req.params.id });
    kid.registration.hecked_in = true;
    kid.registration.checked_in_at = new Date();
    kid.registration.checked_out_by = null;
    kid.registration.checked_out_at = null;

    await kid.save();
    return kid;
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.post("/check_out/:id", async (req, res) => {
  try {
    const kid = await Kid.findOne({ _id: req.params.id });

    kid.registration.hecked_in = true;
    kid.registration.checked_in_at = null;
    kid.registration.checked_out_by = args.checked_out_by;
    kid.registration.checked_out_at = new Date();

    await kid.save();
    return kid;
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

export default router;
