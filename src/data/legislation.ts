// Mock dos status
// Isso é como se fosse uma tabela States com coluna legislative_status

export const legislationStates: Record<
  string,
  { status: string; leis: Record<string, string[]> }
> = {
  // Proposta
  BA: { status: "proposta", leis: {} },
  CE: { status: "proposta", leis: {} },
  MA: { status: "proposta", leis: {} },
  MG: { status: "proposta", leis: {} },
  RJ: {
    status: "proposta",
    leis: {
      proposta: ["PL 789/2024"],
      promulgada: [],
    },
  },
  SP: {
    status: "proposta",
    leis: {
      proposta: ["PL 123/2023", "PL 456/2024"],
      promulgada: [],
    },
  },
  TO: { status: "proposta", leis: {} },

  // Legislação promulgada e proposta para IA
  GO: {
    status: "proposta_e_promulgada",
    leis: {
      proposta: ["PL 555/2023"],
      promulgada: ["Lei 9.999/2021"],
    },
  },

  // Apenas legislação promulgada para IA
  PR: {
    status: "promulgada",
    leis: {
      proposta: [],
      promulgada: ["Lei 10.111/2022"],
    },
  },

  // Sem nenhuma legislação proposta
  // Acre, Alagoas, Amapá, Amazonas, Espírito Santo, Mato Grosso, Mato Grosso do Sul, Paraíba, Piauí, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, Sergipe

  AC: { status: "nenhuma", leis: {} },
  AL: { status: "nenhuma", leis: {} },
  AP: { status: "nenhuma", leis: {} },
  AM: { status: "nenhuma", leis: {} },
  DF: { status: "nenhuma", leis: {} },
  ES: { status: "nenhuma", leis: {} },
  MT: { status: "nenhuma", leis: {} },
  MS: { status: "nenhuma", leis: {} },
  PA: { status: "nenhuma", leis: {} },
  PB: { status: "nenhuma", leis: {} },
  PE: { status: "nenhuma", leis: {} },
  PI: { status: "nenhuma", leis: {} },
  RN: { status: "nenhuma", leis: {} },
  RS: { status: "nenhuma", leis: {} },
  RO: { status: "nenhuma", leis: {} },
  RR: { status: "nenhuma", leis: {} },
  SC: { status: "nenhuma", leis: {} },
  SE: { status: "nenhuma", leis: {} },
};
