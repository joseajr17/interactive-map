import Section from "../Section";

export function SummarySection() {
  return (
    <Section id="summary-section">
      <div className="max-w-4xl mx-auto pt-[115px] sm:pt-20" id="summary">
        <div
          className="border border-gray-300 rounded-xl shadow-md p-6 bg-white/70"
          data-test="summary-section-content"
        >
          <h3
            className="text-2xl font-semibold text-gray-800 mb-4"
            data-test="summary-section-title"
          >
            Resumo
          </h3>

          <div
            className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify space-y-6"
            data-test="summary-section-text"
          >
            <p>
              Este projeto consiste em um mapa interativo do Brasil que reúne as
              legislações estaduais relacionadas à Inteligência Artificial.
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
              acompanhar as legislações estaduais sobre Inteligência Artificial
              (
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
  );
}
