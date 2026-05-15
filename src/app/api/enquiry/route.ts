import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Old API route disabled. Form should send via EmailJS directly.",
    },
    { status: 410 }
  );
}