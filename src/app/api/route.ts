import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ version: "1" }, { status: 200 });
};
