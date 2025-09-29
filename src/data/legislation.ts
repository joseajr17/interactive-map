// Mock dos status
// Isso é como se fosse uma tabela States com coluna legislative_status

export const legislationStates: Record<string, string> = {
  // Proposta
  BA: "proposta",
  CE: "proposta",
  MA: "proposta",
  MG: "proposta",
  RJ: "proposta",
  SP: "proposta",
  TO: "proposta",

  // Legislação promulgada e proposta para IA
  GO: "proposta_e_promulgada",

  // Apenas legislação promulgada para IA
  PR: "promulgada",

  // Sem nenhuma legislação proposta
  // Acre, Alagoas, Amapá, Amazonas, Espírito Santo, Mato Grosso, Mato Grosso do Sul, Paraíba, Piauí, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, Sergipe

  AC: "nenhuma",
  AL: "nenhuma",
  AP: "nenhuma",
  AM: "nenhuma",
  DF: "nenhuma",
  ES: "nenhuma",
  MT: "nenhuma",
  MS: "nenhuma",
  PA: "nenhuma",
  PB: "nenhuma",
  PE: "nenhuma",
  PI: "nenhuma",
  RN: "nenhuma",
  RS: "nenhuma",
  RO: "nenhuma",
  RR: "nenhuma",
  SC: "nenhuma",
  SE: "nenhuma",
};
