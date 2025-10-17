import { Container } from "@/components/Container";
import { IaBrSection } from "@/components/IaBrSection";
import { MapSection } from "@/components/MapSection";
import SectionHeader from "@/components/SectionHeader";
import { SummarySection } from "@/components/SummarySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SectionHeader
        title="Brasil Interativo"
        subtitle="Um mapeamento interativo das legislações estaduais sobre Inteligência Artificial no Brasil"
        bgImage="/bg.jpg"
        id="home"
      />
      <SummarySection />

      <Container>
        <MapSection />
        <IaBrSection />
      </Container>
    </div>
  );
}
