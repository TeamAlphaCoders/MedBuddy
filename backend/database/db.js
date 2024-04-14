import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const Connection = async () => {
  const URI = process.env.DB_URI;

  try {
    const connection = await mongoose.connect(URI);
    console.log("Connected to Main Database successfully");

    return { connection};

  } catch (error) {
    console.log("Error while connecting to the databases", error);
  }
};

export default Connection;