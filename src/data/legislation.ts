// Mock dos status
// Isso é como se fosse uma tabela States com coluna legislative_status

export const legislationStates: Record<
  string,
  {
    status: Record<string, string>;
    leis: Record<string, { titulo: string; resumo: string; link: string }[]>;
  }
> = {
  // Nenhuma Legislação Proposta
  AC: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Promulgada
  AL: {
    status: {
      id: "promulgada",
      label: "Promulgada",
    },
    leis: {
      Promulgada: [
        {
          titulo: "LEI Nº 9.095, DE 11 DE DEZEMBRO DE 2023",
          resumo: `Estabelece princípios e diretrizes para o uso responsável da 
          Inteligência Artificial no âmbito da Administração Pública Estadual, 
          visando garantir ética, transparência e proteção de dados.`,
          link: "https://sapl.al.al.leg.br/norma/2799",
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  AP: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  AM: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 940/2024, DE 12 DE DEZEMBRO DE 2024",
          resumo: `Busca regulamentar o uso da Inteligência Artificial no Estado do Amazonas, 
          definindo normas para desenvolvimento, aplicação e governança de sistemas de IA, 
          com foco em direitos humanos e sustentabilidade.`,
          link: "https://sapl.al.am.leg.br/materia/173620",
        },
        {
          titulo: "PROJETO DE LEI Nº 621/2025, DE 23 DE JUNHO DE 2025",
          resumo: `Proíbe a utilização de sistemas de inteligênciaartificial (IA) como substituto 
          de profissionaishumanos em atendimento de saúde mental noestado do amazonas.`,
          link: "https://sapl.al.am.leg.br/media/sapl/public/materialegislativa/2025/177443/pl_026381.pdf",
        },
      ],
    },
  },

  // Legislação Proposta
  BA: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 25725/2025, 01 DE ABRIL DE 2025",
          resumo: `Propõe a inclusão da disciplina eletiva de Inteligência Artificial na grade educacional 
          das escolas públicas do Estado da Bahia e dá outras providências`,
          link: "https://albalegis.nopapercloud.com.br/spl/processo.aspx?id=10810&autor=4152&ano=2025",
        },
      ],
    },
  },

  // Legislação Proposta e Promulgada
  CE: {
    status: {
      id: "proposta_e_promulgada",
      label: "Proposta e Promulgada",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 612/2025, DE 07 DE JULHO DE 2025",
          resumo: `DISPÕE SOBRE A POLÍTICA ESTADUAL DE FOMENTO À INOVAÇÃO EM INTELIGÊNCIA ARTIFICIAL NO ESTADO DO CEARÁ.`,
          link: "https://www2.al.ce.gov.br/legislativo/tramit2025/pl612_25.pdf",
        },
      ],
      Promulgada: [
        {
          titulo: "LEI Nº 17.611, DE 11 DE AGOSTO DE 2021",
          resumo: `Estabelece princípios, direitos e deveres para o uso de Inteligência Artificial no estado, com foco 
          na garantia de que os sistemas sejam gerenciados e submetidos à supervisão humana para garantir a autonomia 
          e a fiscalização.`,
          link: `https://leisestaduais.com.br/ce/lei-ordinaria-n-17611-2021-ceara-estabelece-responsabilidades-e-
          diretrizes-para-sistemas-de-inteligencia-artificial-no-ambito-do-estado-do-ceara`,
        },
      ],
    },
  },

  // Distrito Federal (Não pesquisei)
  DF: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  ES: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 390/2025, 12 DE JUNHO DE 2025",
          resumo: `Dispõe sobre a proibição da veiculação de publicidade de serviços de prevenção, cuidado e tratamento de 
          saúde mental baseados em Inteligência Artificial (IA) no Estado do Espírito Santo e dá outras providências`,
          link: "https://www3.al.es.gov.br/processo.aspx?id=450851&termo=INTELIG%u00caNCIA+ARTIFICIAL",
        },
      ],
    },
  },

  // Legislação Promulgada
  GO: {
    status: {
      id: "promulgada",
      label: "Promulgada",
    },
    leis: {
      Promulgada: [
        {
          titulo: "LEI COMPLEMENTAR Nº 205, DE 19 DE MAIO DE 2025",
          resumo: `Institui a Política Estadual de Fomento à Inovação em Inteligência Artificial, 
          promovendo pesquisa, desenvolvimento, capacitação, infraestrutura e experimentação 
          regulada de IA no estado.`,
          link: `https://leisestaduais.com.br/go/lei-complementar-n-205-2025-goias-institui-a-
          politica-estadual-de-fomento-a-inovacao-em-inteligencia-artificial-no-estado-de-goias`,
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  MA: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Nenhuma Legislação Proposta
  MT: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Nenhuma Legislação Proposta
  MS: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  MG: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 3.634/2025, DE 10 DE ABRIL DE 2025",
          resumo: `Dispõe sobre a inclusão obrigatória de conteúdos relacionados à Inteligência Artificial
           na grade curricular da rede pública estadual de ensino de Minas Gerais.`,
          link: `https://www.almg.gov.br/atividade-parlamentar/projetos-de-lei/texto/?tipo=PL&num=3634&ano=2025
          #:~:text=A%20Assembleia%20Legislativa%20do%20Estado,ano)%20e%20no%20Ensino%20M%C3%A9dio.`,
        },
        {
          titulo: "PROJETO DE LEI Nº 4.097/2025, DE 18 DE JULHO DE 2025",
          resumo: `Institui o Programa Mineiro de Educação Digital, Segurança Cibernética e Inteligência Artificial
           (ProMineIA), promovendo capacitação e integração de IA no ensino e segurança digital.`,
          link: "https://www.almg.gov.br/atividade-parlamentar/projetos-de-lei/texto/?tipo=PL&num=4097&ano=2025",
        },
        {
          titulo: "PROJETO DE LEI Nº 4.220/2025, DE 13 DE AGOSTO DE 2025",
          resumo: `Institui a política de inovação logística no agronegócio por meio da inteligência artificial no 
          Estado, fomentando o uso de IA para otimização de cadeias logísticas agrícolas e dá outras providências.`,
          link: "https://www.almg.gov.br/atividade-parlamentar/projetos-de-lei/texto/?tipo=PL&num=4220&ano=2025",
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  PA: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  PB: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 2.586/2024, DE 15 DE ABRIL DE 2025",
          resumo: `Institui a aprendizagem do uso ético da Inteligência Artificial (IA) nas escolas da rede pública 
          de ensino estadual como atividade extracurricular.`,
          link: "https://parlamentopb.com.br/alpb-aprova-inclusao-de-ensino-etico-da-inteligencia-artificial-nas-escolas-da-pb/",
        },
      ],
    },
  },

  // Legislação Proposta e Promulgada
  PR: {
    status: {
      id: "proposta_e_promulgada",
      label: "Proposta e Promulgada",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 175/2025, DE 31 DE MARÇO DE 2025",
          resumo: `Permite que o Governo do Paraná firme parcerias com entidades públicas e privadas para aliar 
          o uso da Inteligência Artificial ao enfrentamento dos eventos climáticos extremos, como chuvas mais 
          intensas e longos períodos de seca`,
          link: `https://www.assembleia.pr.leg.br/comunicacao/noticias/deputados-propoem-uso-da-ia-para-enfrentar-emergencias-climaticas-no-parana`,
        },
      ],
      Promulgada: [
        {
          titulo: "LEI Nº 22.324, DE 2 DE ABRIL DE 2025",
          resumo: `Institui o Plano de Diretrizes de Inteligência Artificial na Administração Pública 
          Estadual, definindo parâmetros para desenvolvimento, contratação e uso ético de sistemas 
          de IA na gestão pública.`,
          link: `https://leisestaduais.com.br/pr/lei-ordinaria-n-22324-2025-parana-institui-o-plano-de-diretrizes
          -de-inteligencia-artificial-na-administracao-publica-estadual-e-altera-as-leis-que-especifica`,
        },
        {
          titulo: "LEI Nº 22.343, DE 4 DE ABRIL DE 2025",
          resumo: `Regula o uso da Inteligência Artificial no Estado do Paraná, estabelecendo princípios éticos, transparência, 
          accountability e proibições para sistemas de alto risco na administração e serviços públicos.`,
          link: `https://leisestaduais.com.br/pr/lei-ordinaria-n-22343-2025-parana-dispoe-sobre-a-regulamentacao-do-uso-da-
          inteligencia-artificial-no-estado-do-parana`,
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  PE: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Nenhuma Legislação Proposta
  PI: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  RJ: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo:
            "INICIATIVA PARA INTEGRAR A INTELIGÊNCIA ARTIFICIAL À EDUCAÇÃO ONLINE (IA-EDU)",
          resumo: `Ação pioneira voltada para a implementação responsável da IA na educação e na divulgação científica, 
          a IA-Edu conta com um Código de Ética e Diretrizes de Uso da Inteligência Artificial, além de documentos 
          sobre uso ético e aplicações na educação, voltados para diferentes públicos, estudantes, professores 
          e servidores. `,
          link: `https://www.cecierj.edu.br/2025/04/08/fundacao-cecierj-lanca-iniciativa-para-integrar-inteligencia-
          artificial-a-educacao-online-com-etica-e-inovacao/`,
        },
        {
          titulo: "PROJETO DE LEI Nº 4669/2025, DE 04 DE FEVEREIRO DE 2025",
          resumo: `Dispõe sobre a política de fomento ao desenvolvimento e aplicação de soluções baseada em IA no 
          estado do Rio de Janeiro e dá outras providências.`,
          link: `http://alerjln1.alerj.rj.gov.br/scpro2327.nsf/18c1dd68f96be3e7832566ec0018d833/a9e53d3b8d3403da03258c27006010da?OpenDocument`,
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  RN: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Proposta
  RS: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 179/2025",
          resumo: `Institui a Política Estadual de Fomento àInovação em Inteligência Artificial no Estadodo Rio Grande do Sul.`,
          link: "https://ww4.al.rs.gov.br/proposicao/PL/179/2025",
        },
      ],
    },
  },

  // Legislação Proposta
  RO: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo:
            "PROJETO DE LEI ORDINÁRIA N° 392/2024, DE 05 DE MARÇO DE 2024",
          resumo: `Propõe a regulamentação do uso de Inteligência Artificial na administração pública estadual, com 
          diretrizes claras para a aplicação da IA destacando a necessidade de supervisão humana, 
          proteção de dados, e combate à discriminação`,
          link: "https://sapl.al.ro.leg.br/materia/38165",
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  RR: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Promulgada
  SC: {
    status: {
      id: "promulgada",
      label: "Promulgada",
    },
    leis: {
      Promulgada: [
        {
          titulo: "LEI Nº 19.450, DE 5 DE SETEMBRO DE 2025",
          resumo: `Dispõe sobre os princípios e diretrizes para o uso da Inteligência Artificial 
          no âmbito da Administração Pública Estadual, promovendo inovação responsável, 
          ética e inclusão digital.`,
          link: "https://www.legisweb.com.br/legislacao/?id=483267",
        },
      ],
    },
  },

  // Legislação Proposta
  SP: {
    status: {
      id: "proposta",
      label: "Proposta",
    },
    leis: {
      Proposta: [
        {
          titulo: "PROJETO DE LEI Nº 572/2025, DE 06 DE JUNHO DE 2025",
          resumo: `Dispõe sobre a obrigatoriedade de Informações dos serviços de mídias 
          digitais, ou não, criadas por Inteligência Artificial (IA).`,
          link: "https://www.al.sp.gov.br/propositura/?id=1000611758",
        },
        {
          titulo: "PROJETO DE LEI Nº 323/2025, DE 11 DE ABRIL DE 2025",
          resumo: `Dispõe sobre o uso de recursos de inteligência artificial na educação básica da rede pública estadual.`,
          link: "https://www.doe.sp.gov.br/legislativo/expediente/projeto-de-lei-n-323-de-2025-2025041021166301010284",
        },
      ],
    },
  },

  // Nenhuma Legislação Proposta
  SE: {
    status: {
      id: "nenhuma",
      label: "Nenhuma",
    },
    leis: {},
  },

  // Legislação Promulgada
  TO: {
    status: {
      id: "promulgada",
      label: "Promulgada",
    },
    leis: {
      Promulgada: [
        {
          titulo: "LEI Nº 4.752, DE 27 DE JUNHO DE 2025.",
          resumo: `Inclui a disciplina eletiva de Inteligência Artificial como um dos 
          eixos do currículo de letramento digital e em projetos de pré-iniciação 
          científica na grade educacional das escolas públicas do Estado do 
          Tocantins e dá outras providências.`,
          link: "https://www.al.to.leg.br/arquivos/lei_4752-2025_75840.PDF",
        },
        {
          titulo: "LEI Nº 4.645, DE 17 DE JANEIRO DE 2025",
          resumo: `Estabelece princípios e diretrizes para a implementação e o uso 
          da inteligência artificial no âmbito da Administração Pública Estadual 
          Direta e Indireta.`,
          link: "https://www.al.to.leg.br/arquivos/lei_4645-2025_73129.PDF",
        },
      ],
    },
  },
};
