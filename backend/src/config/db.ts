import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";


const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("successfully connected");
    
  } catch (error) {
    console.log("mongo db error", error);
    process.exit(1)
    
  }
}

export default connectToDatabase