import { legislationStates } from "@/data/legislation";
import { NextResponse } from "next/server";

export async function GET() {
  const estados = Object.entries(legislationStates).map(
    ([estadoSigla, { status, leis }], index) => ({
      id: index + 1,
      estadoSigla,
      status,
      leis,
    })
  );

  return NextResponse.json({
    success: true,
    data: estados,
  });
}
