import BrazilMap from "../BrazilMap";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

export function MapSection() {
  return (
    <Section id="map">
      <SectionHeader title="Mapa Interativo" id="map" />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Explicação */}
        <p
          className="text-lg leading-relaxed text-gray-700 text-justify space-y-6"
          data-test="map-section-summary"
        >
          Este mapa apresenta as iniciativas e legislações estaduais
          relacionadas à Inteligência Artificial no Brasil. Ao clicar em cada
          estado, você pode visualizar informações específicas, como projetos de
          lei em andamento, regulamentações aprovadas e iniciativas de pesquisa
          e inovação. A plataforma permite comparar facilmente os diferentes
          contextos regulatórios em todo o país.
        </p>

        {/* Mapa */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <BrazilMap />
        </div>

        {/* Observação */}
        <p
          className="text-sm text-gray-500 italic mt-4 text-center"
          data-test="map-section-observation"
        >
          * Os dados apresentados são baseados em informações públicas
          disponíveis até 2025 e podem ser atualizados conforme novas
          iniciativas surgirem.
        </p>
      </div>
    </Section>
  );
}
