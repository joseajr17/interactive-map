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
import { MapPin } from "lucide-react";

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
    <div className="h-screen flex flex-col md:flex-row gap-4">

      {/* Mapa + legenda apenas em telas médias ou maiores */}
      <div className="hidden md:flex flex-1 gap-4">
        {/* Mapa */}
        <div className="flex-1">
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
                          nome: geo.properties.name,
                          status,
                          leis: estado?.leis || {},
                        });

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
        </div>

        {/* Legenda */}
        <div>
          <MapLegend statusColors={statusColors} />
        </div>
      </div>

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
