// Mock dos status
// Isso é como se fosse uma tabela States com coluna legislative_status

export const legislationStates: Record<
  string,
  {
    status: Record<string, string>;
    leis: Record<string, { titulo: string; resumo: string; link: string }[]>;
  }
> = {
  // Proposta
  BA: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 25.725/2025",
          resumo:
            "Inclusão de inteligência artificial como disciplina eletiva em escolas públicas.",
          link: "https://www.aleba.ba.gov.br/leis/pl25725-2025",
        },
      ],
    },
  },
  CE: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 612/2025",
          resumo:
            "Política Estadual de Fomento à Inovação em IA, incluindo 'IA nas Escolas' e sandbox regulatório.",
          link: "https://www.al.ce.gov.br/leis/pl612-2025",
        },
      ],
    },
  },
  MA: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 183/2025",
          resumo:
            "Programa de Aprendizagem Ética de IA em escolas públicas e privadas.",
          link: "https://www.al.ma.gov.br/leis/pl183-2025",
        },
      ],
    },
  },
  MG: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 3.634/2025",
          resumo:
            "Inclusão de inteligência artificial na grade curricular escolar.",
          link: "https://www.almg.gov.br/leis/pl3634-2025",
        },
        {
          titulo: "PL 4.097/2025",
          resumo: "Programa Mineiro de Educação sobre Inteligência Artificial.",
          link: "https://www.almg.gov.br/leis/pl4097-2025",
        },
      ],
    },
  },
  RJ: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 5.577/2025",
          resumo:
            "Identificação obrigatória de conteúdos gerados por inteligência artificial.",
          link: "https://www.alrj.gov.br/leis/pl5577-2025",
        },
        {
          titulo: "PL 5.660/2025",
          resumo:
            "Diretrizes éticas para o desenvolvimento de inteligência artificial.",
          link: "https://www.alrj.gov.br/leis/pl5660-2025",
        },
        {
          titulo: "PL 5.945/2025",
          resumo: "Orientação sobre riscos de IA em saúde mental.",
          link: "https://www.alrj.gov.br/leis/pl5945-2025",
        },
      ],
    },
  },
  SP: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 572/2025",
          resumo:
            "Obrigatoriedade de rotulagem em mídias geradas por inteligência artificial.",
          link: "https://www.alsp.gov.br/leis/pl572-2025",
        },
      ],
    },
  },
  TO: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PL 880/2024",
          resumo:
            "Disciplina eletiva de IA no currículo de letramento digital em escolas públicas.",
          link: "https://www.al.to.gov.br/leis/pl880-2024",
        },
      ],
    },
  },

  // Legislação promulgada e proposta para IA
  GO: {
    status: {
      id: "proposta_e_promulgada",
      label: "Proposta e Promulgada",
    },
    //status: "proposta_e_promulgada",
    leis: {
      Proposta: [
        {
          titulo: "PL 113/2025",
          resumo:
            "Princípios para o uso de inteligência artificial na administração pública.",
          link: "https://www.assembleiago.gov.br/leis/pl113-2025",
        },
        {
          titulo: "PL 261/2025",
          resumo:
            "Semana Estadual de Conscientização sobre Uso Responsável de IA por crianças e jovens.",
          link: "https://www.assembleiago.gov.br/leis/pl261-2025",
        },
      ],
      Promulgada: [
        {
          titulo: "Lei Complementar 205/2025",
          resumo:
            "Política Estadual de Fomento à Inovação em IA, com foco em ética, inovação e proteção de dados.",
          link: "https://www.assembleiago.gov.br/leis/lc205-2025",
        },
      ],
    },
  },

  // Apenas legislação promulgada para IA
  PR: {
    status: {
      id: "promulgada",
      label: "Promulgada",
    },
    leis: {
      Promulgada: [
        {
          titulo: "Lei 22.324/2025",
          resumo:
            "Plano de Diretrizes de IA na Administração Pública Estadual.",
          link: "https://www.alep.pr.gov.br/leis/22324-2025",
        },
        {
          titulo: "Lei 22.343/2025",
          resumo:
            "Disciplina o uso de IA no estado, com ênfase em ética e eficiência pública.",
          link: "https://www.alep.pr.gov.br/leis/22343-2025",
        },
      ],
    },
  },

  // Sem nenhuma legislação proposta
  // Acre, Alagoas, Amapá, Amazonas, Espírito Santo, Mato Grosso, Mato Grosso do Sul, Paraíba, Piauí, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, Sergipe

  AC: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  AL: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  AP: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  AM: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  DF: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  ES: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  MT: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  MS: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  PA: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  PB: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  PE: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  PI: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  RN: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  RS: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  RO: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  RR: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  SC: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
  SE: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },
};
