"use client";

import { useEffect, useState } from "react";
import { Geographies } from "@vnedyalk0v/react19-simple-maps";
import geoData from "@/data/br-states.json";
import { useStates } from "@/hooks/useStates";

import { MapWrapper } from "../MapWrapper";
import { StateItem } from "../StateItem";
import { MapLegend } from "../MapLegend";
import { StateDialog } from "../StateDialog";
import { Loading } from "../Loading";

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
  const { data: states, loading } = useStates();
  const [selected, setSelected] = useState<SelectedState | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="h-screen flex flex-col md:flex-row gap-4">
      {/* Mapa + legenda apenas em telas médias ou maiores */}
      <div className="flex flex-col md:flex-row flex-1 gap-4">
        {/* Mapa */}
        <div className="flex-1">
          <MapWrapper isMobile={isMobile}>
            <Geographies geography={geoData} data-test="brazil-states">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const geography = geo as GeographyType;

                  if (typeof geography.id !== "string") {
                    return null;
                  }

                  const stateAcronym = geography.id;
                  const state = states.find(
                    (e) => e.stateAcronym === stateAcronym
                  );
                  const status = state?.status.label || "";
                  const fillColor = statusColors[state?.status.id ?? "nenhuma"];

                  return (
                    <StateItem
                      key={geography.id}
                      geo={geography}
                      fillColor={fillColor}
                      status={status}
                      onClick={() => {
                        setSelected({
                          acronym: stateAcronym,
                          name: geography.properties?.name || "",
                          status,
                          laws: state?.laws || {},
                        });

                        const firstTab =
                          Object.keys(state?.laws || {})[0] || "Nenhuma";
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
