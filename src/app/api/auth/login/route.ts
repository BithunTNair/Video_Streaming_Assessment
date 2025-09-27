import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectDB();
    const userData = await User.findOne({ email });
    if (!userData) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }
    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign(
      { userId: userData._id, email: userData.email },
      secretKey as string,
      { expiresIn: "1d" }
    );
     return NextResponse.json(
        { message: "LogIn Successful",token },
        { status: 200 }
      );
  } catch (error:any) {
    console.log(error);
     return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
  }
}
