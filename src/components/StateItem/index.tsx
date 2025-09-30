"use client";

import { Geography } from "@vnedyalk0v/react19-simple-maps";
import { StateLabel } from "../StateLabel";

type StateItemProps = {
  geo: any;
  fillColor: string;
  status: string;
};

export function StateItem({ geo, fillColor, status }: StateItemProps) {
  const isDisabled = status === "nenhuma";

  return (
    <>
      <Geography
        key={geo.rsmKey}
        geography={geo}
        style={{
          default: {
            fill: fillColor,
            outline: "none",
            stroke: "#FFF",
            strokeWidth: 0.3,
            opacity: 0.95,
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
        }}
      />
      <StateLabel geo={geo} />
    </>
  );
}
