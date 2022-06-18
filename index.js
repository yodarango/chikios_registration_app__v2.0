import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

// set up the server
import express from "express";
import mongoose from "mongoose";
const app = express();

// controllers
import kidControllers from "./source/controllers/kids.js";
import kidControllersGet from "./source/controllers/kids_get.js";

//middleware
app.set("view engine", "ejs");
//app.use(express.static(`/public`));

// db connection
export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Successfully connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
dbConnection();

//app.use(cors());
app.use("/kids", kidControllers);
app.use("/", kidControllersGet);

app.listen(process.env.PORT, () => {
  console.log(`listening on post ${process.env.PORT}`);
});
