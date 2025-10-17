import { Globe, Scale, TrendingUp } from "lucide-react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { InfoCard } from "../InfoCard";

export function IaBrSection() {
  return (
    <Section id="ai-br-section">
      <SectionHeader
        title="IA no Brasil"
        subtitle="Panorama da Inteligência Artificial no país:"
        id="ia-br"
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-4">
        <InfoCard
          id="context"
          icon={<Globe className="w-6 h-6 text-blue-600" />}
          title="Contexto Nacional"
          paragraphs={[
            <>
              A Inteligência Artificial no Brasil vem ganhando destaque tanto no
              setor público quanto no privado. Universidades, centros de
              pesquisa e empresas de tecnologia têm desenvolvido projetos em
              áreas como saúde, educação, segurança e agronegócio, colocando o
              país em um caminho de crescente adoção da IA.
            </>,
            <>
              Além disso, iniciativas governamentais, como a Estratégia
              Brasileira de Inteligência Artificial (EBIA), apontam diretrizes
              para estimular a inovação, a capacitação de profissionais e a
              aplicação ética e responsável dessas tecnologias.
            </>,
          ]}
        />

        <InfoCard
          id="legal-framework"
          icon={<Scale className="w-6 h-6 text-green-600" />}
          title="Marco Legal"
          paragraphs={[
            <>
              No campo jurídico, o Brasil discute atualmente o{" "}
              <a
                href="https://www25.senado.leg.br/web/atividade/materias/-/materia/157233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                Projeto de Lei nº 2.338/2023
              </a>
              , que propõe princípios e diretrizes para o uso da Inteligência
              Artificial em território nacional. Paralelamente, estados e
              municípios já começam a propor legislações próprias, refletindo a
              diversidade de contextos e necessidades regionais.
            </>,
            <>
              Esse cenário mostra um ambiente regulatório em construção, no qual
              a harmonização entre iniciativas federais e estaduais será
              fundamental para garantir segurança jurídica, inovação e proteção
              de direitos.
            </>,
          ]}
        />

        <InfoCard
        id="challenges"
          icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
          title="Desafios e Oportunidades"
          paragraphs={[
            <>
              Apesar dos avanços, o Brasil enfrenta desafios como a desigualdade
              no acesso a tecnologias, a necessidade de formação de mão de obra
              especializada e a criação de mecanismos eficazes para evitar
              vieses e usos discriminatórios da IA.
            </>,
            <>
              Ao mesmo tempo, o país possui grandes oportunidades para aplicar a
              Inteligência Artificial em áreas estratégicas como o agronegócio,
              a saúde pública e a gestão urbana, ampliando o desenvolvimento
              econômico e promovendo maior inclusão social.
            </>,
          ]}
        />
      </div>
    </Section>
  );
}
