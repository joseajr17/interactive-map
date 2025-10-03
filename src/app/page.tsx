import BrazilMap from "@/components/BrazilMap";
import { Container } from "@/components/Container";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Globe, Scale, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SectionHeader
        title="Brasil Interativo"
        subtitle="Um mapeamento interativo das legislações estaduais sobre Inteligência Artificial no Brasil"
        bgImage="/bg.jpg"
      />
      <Section>
        <div className="max-w-4xl mx-auto pt-[115px] sm:pt-20" id="summary">
          <div className="border border-gray-300 rounded-xl shadow-md p-6 bg-white/70">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Resumo
            </h3>

            <div className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify space-y-6">
              <p>
                Este projeto consiste em um mapa interativo do Brasil que reúne
                as legislações estaduais relacionadas à Inteligência Artificial.
                Diante da ausência de um marco regulatório federal específico,
                diversos estados brasileiros têm tomado a iniciativa de propor
                seus próprios projetos de lei, buscando suprir as lacunas
                existentes no ordenamento jurídico nacional sobre o tema.
              </p>
              <p>
                A inspiração para esta iniciativa foi o{" "}
                <a
                  href="https://www.bclplaw.com/en-US/events-insights-news/us-state-by-state-artificial-intelligence-legislation-snapshot.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  trabalho do BCLP
                </a>
                , que desenvolveu um mapa interativo nos Estados Unidos para
                acompanhar as legislações estaduais sobre Inteligência
                Artificial (
                <a
                  href="https://infographics.bclplaw.marketing/ai-legislation-map/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  mapa da BCLP
                </a>
                ).
              </p>
              <p>
                O objetivo deste projeto é adaptar essa abordagem ao contexto
                brasileiro, oferecendo uma ferramenta acessível para
                pesquisadores, legisladores, empresas e cidadãos interessados em
                compreender como a Inteligência Artificial vem sendo discutida e
                regulamentada nos diferentes estados do país.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Container>
        <Section id="mapa">
          <SectionHeader
            title="Mapa Interativo"
            subtitle="Um mapa interativo com as legislações estaduais sobre Inteligência Artificial no Brasil"
          />

          <div className="max-w-6xl mx-auto">
            <BrazilMap />
          </div>
        </Section>

        <Section id="ai-br">
          <SectionHeader
            title="IA no Brasil"
            subtitle="Panorama da Inteligência Artificial no país:"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto pt-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Contexto Nacional
                </h3>
              </div>
              <p className="text-gray-700">
                A Inteligência Artificial no Brasil vem ganhando destaque tanto
                no setor público quanto no privado. Universidades, centros de
                pesquisa e empresas de tecnologia têm desenvolvido projetos em
                áreas como saúde, educação, segurança e agronegócio, colocando o
                país em um caminho de crescente adoção da IA.
              </p>
              <p className="text-gray-700 mt-4">
                Além disso, iniciativas governamentais, como a Estratégia
                Brasileira de Inteligência Artificial (EBIA), apontam diretrizes
                para estimular a inovação, a capacitação de profissionais e a
                aplicação ética e responsável dessas tecnologias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-green-600" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Marco Legal
                </h3>
              </div>
              <p className="text-gray-700">
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
                municípios já começam a propor legislações próprias, refletindo
                a diversidade de contextos e necessidades regionais.
              </p>
              <p className="text-gray-700 mt-4">
                Esse cenário mostra um ambiente regulatório em construção, no
                qual a harmonização entre iniciativas federais e estaduais será
                fundamental para garantir segurança jurídica, inovação e
                proteção de direitos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Desafios e Oportunidades
                </h3>
              </div>
              <p className="text-gray-700">
                Apesar dos avanços, o Brasil enfrenta desafios como a
                desigualdade no acesso a tecnologias, a necessidade de formação
                de mão de obra especializada e a criação de mecanismos eficazes
                para evitar vieses e usos discriminatórios da IA.
              </p>
              <p className="text-gray-700 mt-4">
                Ao mesmo tempo, o país possui grandes oportunidades para aplicar
                a Inteligência Artificial em áreas estratégicas como o
                agronegócio, a saúde pública e a gestão urbana, ampliando o
                desenvolvimento econômico e promovendo maior inclusão social.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
