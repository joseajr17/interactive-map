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
      <Section id="sobre">
        <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto">
          <p>
            Este projeto tem como objetivo mapear e analisar a situação das
            legislações sobre inteligência artificial nos estados brasileiros,
            oferecendo uma visão clara e acessível do cenário regulatório.
          </p>
          <p>
            Através desta plataforma, buscamos promover transparência e
            facilitar o acesso à informação sobre esse tema crucial para o
            desenvolvimento tecnológico do país.
          </p>
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
