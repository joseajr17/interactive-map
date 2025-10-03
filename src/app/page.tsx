import BrazilMap from "@/components/BrazilMap";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

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


      <Section id="ia-br">
        <SectionHeader title="IA no Brasil" subtitle="Resumo da IA no Brasil" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Contexto Nacional
            </h3>
            <p className="text-gray-700">
              A inteligência artificial no Brasil vem ganhando destaque tanto no
              setor público quanto privado, com diversas iniciativas em
              andamento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Marco Legal
            </h3>
            <p className="text-gray-700">
              Discussões sobre regulamentação federal e iniciativas estaduais
              mostram um cenário diversificado e em constante evolução.
            </p>
          </div>
        </div>
      </Section>

      <Section id="mapa">
        <SectionHeader
          title="Mapa Interativo"
          subtitle="Um mapa interativo com as legislações estaduais sobre Inteligência Artificial no Brasil"
        />

        <div className="max-w-6xl mx-auto">
          <BrazilMap />
        </div>
      </Section>
    </div>
  );
}
