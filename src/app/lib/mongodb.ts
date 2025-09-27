import mongoose from "mongoose";
export async function connectDB(): Promise<void> {
  const uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(uri as string);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
console.log('');

