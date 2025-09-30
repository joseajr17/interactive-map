// Mock dos status
// Isso é como se fosse uma tabela States com coluna legislative_status

export const legislationStates: Record<
  string,
  {
    status: string;
    leis: Record<string, { titulo: string; resumo: string; link: string }[]>;
  }
> = {
  // Proposta
  BA: { status: "proposta", leis: {} },
  CE: { status: "proposta", leis: {} },
  MA: { status: "proposta", leis: {} },
  MG: { status: "proposta", leis: {} },
  RJ: {
    status: "proposta",
    leis: {
      proposta: [
        {
          titulo: "PL 789/2024",
          resumo:
            "Projeto de lei que propõe diretrizes para uso de IA no setor público.",
          link: "https://www.alrj.gov.br/leis/pl789-2024",
        },
      ],
      promulgada: [],
    },
  },
  SP: {
    status: "proposta",
    leis: {
      proposta: [
        {
          titulo: "PL 123/2023",
          resumo:
            "Dispõe sobre a regulamentação da inteligência artificial em serviços financeiros.",
          link: "https://www.alsp.gov.br/leis/pl123-2023",
        },
        {
          titulo: "PL 456/2024",
          resumo:
            "Estabelece regras de transparência para algoritmos utilizados por empresas privadas.",
          link: "https://www.alsp.gov.br/leis/pl456-2024",
        },
      ],
      promulgada: [],
    },
  },
  TO: { status: "proposta", leis: {} },

  // Legislação promulgada e proposta para IA
  GO: {
    status: "proposta_e_promulgada",
    leis: {
      proposta: [
        {
          titulo: "PL 555/2023",
          resumo:
            "Propõe mecanismos de governança para sistemas automatizados no setor público.",
          link: "https://www.assembleiago.gov.br/leis/pl555-2023",
        },
      ],
      promulgada: [
        {
          titulo: "Lei 9.999/2021",
          resumo: "Lei que regula parcialmente o uso de IA em saúde.",
          link: "https://www.assembleiago.gov.br/leis/9999-2021",
        },
      ],
    },
  },

  // Apenas legislação promulgada para IA
  PR: {
    status: "promulgada",
    leis: {
      proposta: [
        {
          titulo: "HB4",
          resumo: `Enacted on June 18,, 2023, HB4, the Texas Data Privacy and Security Act, is based on the Virginia Consumer Data Protection Act.  
          The law creates similar requirements enabling individuals to opt-out of “profiling” that produces a legal or similarly significant 
          effect concerning the individual. Controllers must also perform a data protection assessment for high-risk profiling activities.  
          The Act went into force on July 1, 2024. 
          Enacted on June 18,, 2023, HB4, the Texas Data Privacy and Security Act, is based on the Virginia Consumer Data Protection Act.  
          The law creates similar requirements enabling individuals to opt-out of “profiling” that produces a legal or similarly significant 
          effect concerning the individual. Controllers must also perform a data protection assessment for high-risk profiling activities.  
          The Act went into force on July 1, 2024.`,
          link: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4",
        },
        {
          titulo: "HB4",
          resumo: `Enacted on June 18,, 2023, HB4, the Texas Data Privacy and Security Act, is based on the Virginia Consumer Data Protection Act.  
          The law creates similar requirements enabling individuals to opt-out of “profiling” that produces a legal or similarly significant 
          effect concerning the individual. Controllers must also perform a data protection assessment for high-risk profiling activities.  
          The Act went into force on July 1, 2024.`,
          link: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4",
        },
        {
          titulo: "HB4",
          resumo: `Enacted on June 18,, 2023, HB4, the Texas Data Privacy and Security Act, is based on the Virginia Consumer Data Protection Act.  
          The law creates similar requirements enabling individuals to opt-out of “profiling” that produces a legal or similarly significant 
          effect concerning the individual. Controllers must also perform a data protection assessment for high-risk profiling activities.  
          The Act went into force on July 1, 2024.`,
          link: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4",
        },
        {
          titulo: "HB4",
          resumo: `Enacted on June 18,, 2023, HB4, the Texas Data Privacy and Security Act, is based on the Virginia Consumer Data Protection Act.  
          The law creates similar requirements enabling individuals to opt-out of “profiling” that produces a legal or similarly significant 
          effect concerning the individual. Controllers must also perform a data protection assessment for high-risk profiling activities.  
          The Act went into force on July 1, 2024.`,
          link: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4",
        },
      ],
      promulgada: [
        {
          titulo: "Lei 10.111/2022",
          resumo:
            "Lei estadual que estabelece princípios para o uso ético da inteligência artificial.",
          link: "https://www.alep.pr.gov.br/leis/10111-2022",
        },
      ],
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
