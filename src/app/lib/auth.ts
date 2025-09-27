import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function verifyToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return {
      valid: false,
      response: NextResponse.json({ error: "No token" }, { status: 401 }),
    };
  }
  const token = authHeader.split(" ")[1];
  
  try {
    const secretKey= process.env.JWT_SECRET
    const decodedToken = jwt.verify(token, secretKey as string);
    return { valid: true, decodedToken };
  } catch (error) {
    console.log(error);
     return {
      valid: false,
      response: NextResponse.json({ message: "Invalid Token" }, { status: 401 }),
    };
  }
}
