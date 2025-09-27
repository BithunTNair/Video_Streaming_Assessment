import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";

export async function GET(req: NextRequest) {
  const secretKey = process.env.JWT_SECRET;
  const { valid, decodedToken, response } = await verifyToken(req);
  if (!valid) {
    return response;
  }

  const signedToken = jwt.sign(
    { videoId: "sample-video", userId: (decodedToken as any).userId },
    secretKey as string,
    { expiresIn: "60s" }
  );
  const signedUrl=`/video/sample/output.m3u8?token=${signedToken}`
  return NextResponse.json({url:signedUrl})
}
