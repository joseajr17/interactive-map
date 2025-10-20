"use client";

import { Geography } from "@vnedyalk0v/react19-simple-maps";
import { StateLabel } from "../StateLabel";

import { GeographyType } from "@/types";

type StateItemProps = {
  geo: GeographyType;
  fillColor: string;
  status: string;
  onClick?: () => void;
};

export function StateItem({ geo, fillColor, status, onClick }: StateItemProps) {
  const isDisabled = status === "Nenhuma";

  return (
    <>
      <Geography
        data-test={`brazil-state-${geo.id}`}
        key={geo.rsmKey}
        geography={geo}
        onClick={() => !isDisabled && onClick?.()}
        style={{
          default: {
            fill: fillColor,
            outline: "none",
            stroke: "#FFF",
            strokeWidth: 0.3,
            opacity: 1,
            cursor: isDisabled ? "not-allowed" : "pointer",
            pointerEvents: isDisabled ? "none" : "auto",
          },
          hover: {
            fill: fillColor,
            outline: "none",
            stroke: "#FFF",
            strokeWidth: 0.3,
            opacity: 0.8,
            cursor: isDisabled ? "not-allowed" : "pointer",
            pointerEvents: isDisabled ? "none" : "auto",
          },
          pressed: {
            fill: fillColor,
            outline: "none",
            stroke: "#FFF",
            strokeWidth: 0.3,
            opacity: 0.8,
            cursor: isDisabled ? "not-allowed" : "pointer",
            pointerEvents: isDisabled ? "none" : "auto",
          },
        }}
      />
      <StateLabel geo={geo} />
    </>
  );
}
