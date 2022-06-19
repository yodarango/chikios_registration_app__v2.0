// config
import express from "express";
const router = express.Router();

// models
import { Kid } from "../db/models/kid.js";

// ---------- get request
router.get("/", async (req, res) => {
  try {
    // console.log(req.query);
    // const kids = await Kid.find({})
    //   .sort({ first_name: 1 })
    //   .limit(10)
    //   .skip(req.query.skip);
    // console.log(kids);
    // res.render("admin", { kids });
    const kids = await Kid.count();

    res.render("admin", { count: kids });
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const kids = await Kid.find({ _id: req.params.id });
      res.render("admin", { kids });
    }
  } catch (error) {
    console.log(error);
    return `the following error ocurred ${error}`;
  }
});
export default router;
