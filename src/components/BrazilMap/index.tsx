"use client";

import { Geographies } from "@vnedyalk0v/react19-simple-maps";
import geoData from "../../../public/br-states.json";
import { MapWrapper } from "../MapWrapper";
import { StateItem } from "../StateItem";
import { useStates } from "@/hooks/useStates";
import { MapLegend } from "../MapLegend";

// Paleta de cores
const statusColors: Record<string, string> = {
  proposta: "#fd9a00",
  promulgada: "#0b4f4a",
  proposta_e_promulgada: "#024a70",
  nenhuma: "#a6a09b",
};

export default function BrazilMap() {
  const { data: estados, loading } = useStates();

  if (loading) return <p>Carregando mapa...</p>;

  return (
    <div className="flex flex-col gap-4">
      
      {/* Legenda */}
      <MapLegend statusColors={statusColors} />
      {/* Mapa */}
      <MapWrapper>
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const estadoSigla = geo.id;
              const estado = estados.find((e) => e.estadoSigla === estadoSigla);
              const status = estado?.status || "nenhuma";
              const fillColor = statusColors[status];

              return <StateItem key={geo.id} geo={geo} fillColor={fillColor} />;
            })
          }
        </Geographies>
      </MapWrapper>
    </div>
  );
}
