import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    // Read token from cookies
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Return user data (decoded contains { id, email, name })
    return NextResponse.json({
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
