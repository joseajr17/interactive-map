"use client";

import { Geography, Marker } from "@vnedyalk0v/react19-simple-maps";
import { StateLabel } from "../StateLabel";

type StateItemProps = {
  geo: any;
  fillColor: string;
};

export function StateItem({ geo, fillColor }: StateItemProps) {
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
          },
          hover: {
            fill: fillColor,
            outline: "none",
            stroke: "#FFF",
            strokeWidth: 0.3,
            opacity: 0.8,
            cursor: "pointer",
          },
        }}
      />
      <StateLabel geo={geo} />
    </>
  );
}
