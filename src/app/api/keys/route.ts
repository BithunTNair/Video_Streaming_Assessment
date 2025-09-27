import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { valid, response } = await verifyToken(req);
  if (!valid) return response;
  const keyPath= path.join(process.cwd(),'/public/videos','enc.key');
  const key= fs.readFileSync(keyPath);
  return new NextResponse(key,{
    status:200,
    headers:{'Content-Type':'application/octet-stream'}
  })
}


