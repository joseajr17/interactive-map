"use client";

import { useState } from "react";
import { Geographies } from "@vnedyalk0v/react19-simple-maps";
import geoData from "@/data/br-states.json";
import { useStates } from "@/hooks/useStates";

import { MapWrapper } from "../MapWrapper";
import { StateItem } from "../StateItem";
import { MapLegend } from "../MapLegend";
import { StateDialog } from "../StateDialog";
import { Loading } from "../Loading";
import { MapPin } from "lucide-react";

import { SelectedState } from "@/types";
import { GeographyType } from "@/types";

// Paleta de cores
const statusColors: Record<string, string> = {
  proposta: "#fd9a00",
  promulgada: "#008236",
  proposta_e_promulgada: "#0084d1",
  nenhuma: "#6a7282",
};

export default function BrazilMap() {
  const { data: estados, loading } = useStates();
  const [selected, setSelected] = useState<SelectedState | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  if (loading) return <Loading />;

  return (
    <div className="h-screen flex flex-col md:flex-row gap-4">
      {/* Mensagem para celulares */}
      <div className="block md:hidden w-full h-full flex flex-col items-center justify-center text-center px-4">
        <MapPin className="w-16 h-16 mb-4 text-blue-500/80" />
        <p className="text-lg font-semibold">
          O mapa ainda não está disponível para resoluções abaixo de 768px.
        </p>
        <p className="text-sm mt-2 text-black/70">
          Por favor, acesse em um tablet ou computador para visualizar.
        </p>
      </div>

      {/* Mapa + legenda apenas em telas médias ou maiores */}
      <div className="hidden md:flex flex-1 gap-4">
        {/* Mapa */}
        <div className="flex-1">
          <MapWrapper>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const geography = geo as GeographyType;

                  if (typeof geography.id !== "string") {
                    return null;
                  }

                  const estadoSigla = geography.id; // Agora o TypeScript sabe que é uma string
                  const estado = estados.find(
                    (e) => e.estadoSigla === estadoSigla
                  );
                  const status = estado?.status.label || "";
                  const fillColor =
                    statusColors[estado?.status.id ?? "nenhuma"];

                  return (
                    <StateItem
                      key={geography.id}
                      geo={geography}
                      fillColor={fillColor}
                      status={status}
                      onClick={() => {
                        setSelected({
                          sigla: estadoSigla,
                          nome: geography.properties?.name || "",
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
