// config
import express from "express";
const router = express.Router();

// models
import { Kid } from "../db/models/kid.js";

// ---------- get request
router.get("/", async (req, res) => {
  try {
    const kids = await Kid.find({}).limit(10).skip(req.query.skip);
    console.log(kids);
    res.render("index", { kids });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const kid = await Kid.find({ _id: req.params.id });
      res.render("index", { kid });
    }
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});
export default router;
