import { legislationStates } from "@/data/legislation";
import { NextResponse } from "next/server";

export async function GET() {
  const states = Object.entries(legislationStates).map(
    ([stateAcronym, { status, laws }], index) => ({
      id: index + 1,
      stateAcronym,
      status,
      laws,
    })
  );

  return NextResponse.json({
    success: true,
    data: states,
  });
}
