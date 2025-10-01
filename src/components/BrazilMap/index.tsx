"use client";

import { useState } from "react";
import { Geographies } from "@vnedyalk0v/react19-simple-maps";
import geoData from "../../../public/br-states.json";
import { useStates } from "@/hooks/useStates";

import { MapWrapper } from "../MapWrapper";
import { StateItem } from "../StateItem";
import { MapLegend } from "../MapLegend";
import { StateDialog } from "../StateDialog";
import { Loading } from "../Loading";

// Paleta de cores
const statusColors: Record<string, string> = {
  proposta: "#fd9a00",
  promulgada: "#0b4f4a",
  proposta_e_promulgada: "#024a70",
  nenhuma: "#0c0a09",
};

export default function BrazilMap() {
  const { data: estados, loading } = useStates();
  const [selected, setSelected] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  if (loading) return <Loading />;

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
              const status = estado?.status.label;
              const fillColor = statusColors[estado?.status.id] || statusColors["nenhuma"];

              return (
                <StateItem
                  key={geo.id}
                  geo={geo}
                  fillColor={fillColor}
                  status={status}
                  onClick={() => {
                    setSelected({
                      sigla: estadoSigla,
                      nome: geo.properties.name, // nome completo do estado
                      status,
                      leis: estado?.leis || {},
                    });

                    // escolhe a primeira aba automaticamente
                    const firstTab =
                      Object.keys(estado?.leis || {})[0] || "Nenhuma";
                    setActiveTab(firstTab);
                  }}
                />
              );
            })
          }
        </Geographies>
      </MapWrapper>

      {/* Modal com shadcn/ui */}
      <StateDialog
        selected={selected}
        onClose={() => setSelected(null)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
