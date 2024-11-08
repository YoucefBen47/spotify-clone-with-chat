import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("error connecting to db", error);
    process.exit(1);
  }
};
