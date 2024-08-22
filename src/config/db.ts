import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected database succesfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("error in connecting", err);
    });
    await mongoose.connect(config.dataBaseUrl as string);
  } catch (error) {
    console.log("failed to connect database", error);
    process.exit(1);
  }
};

export default connectDb;
