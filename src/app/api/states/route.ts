// Lista todos os estados + status legislativo

import { legislationStates } from "@/data/legislation";
import { NextResponse } from "next/server";

export async function GET() {
  const estados = Object.entries(legislationStates).map(
    ([estadoSigla, status], index) => ({
      id: index + 1,
      estadoSigla,
      status,
    })
  );

  return NextResponse.json({
    success: true,
    data: estados,
  });
}

/**
 * Exemplo de Resposta
 * 
 * {
  "success": true,
  "data": [
    { "stateAcronym": "SP", "status": "proposta" },
    { "stateAcronym": "RJ", "status": "promulgada" },
    { "stateAcronym": "MG", "status": "proposta_e_promulgada" },
    { "stateAcronym": "BA", "status": "nenhuma" }
  ]
} 
 */
