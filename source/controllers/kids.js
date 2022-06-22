// config
import express from "express";
const router = express.Router();
import cors from "cors";

// parse body
router.use(express.json({ limit: "3mb" }));
router.use(express.urlencoded({ extended: false }));

// models
import { Kid } from "../db/models/kid.js";
import { currTime } from "../helpers/temp/current_time.js";
import { authenticateToken } from "../helpers/auth/authenticate_token.js";

router.use(cors());
// ---------- get request
router.post("/register", async (req, res, next) => {
  const allowThirdPartyPickup =
    req.body.allow_third_party_pick_up === "yes" ? true : false;

  const newKid = new Kid({
    ...req.body,
    allow_third_party_pick_up: allowThirdPartyPickup,
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
    //console.log(kid);
    res
      .status(200)
      .send({ success: "child successfully registered", id: kid._id });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.put("/check-in/:id", authenticateToken, async (req, res) => {
  try {
    const kid = await Kid.findOne({ _id: req.params.id });
    kid.registration.checked_in = true;
    kid.registration.checked_in_at = currTime();
    kid.registration.checked_out_by = null;
    kid.registration.checked_out_at = null;

    const updated = await kid.save();

    console.log(updated.registration);

    res.send({ id: updated._id, time: updated.registration.checked_in_at });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.put("/check-out/:id", authenticateToken, async (req, res) => {
  try {
    const kid = await Kid.findOne({ _id: req.params.id });

    kid.registration.checked_in = false;
    kid.registration.checked_in_at = null;
    kid.registration.checked_out_by = req.body.checked_out_by;
    kid.registration.checked_out_at = currTime();

    const updated = await kid.save();

    res.send({ id: updated._id, time: updated.registration.checked_out_at });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

export default router;
