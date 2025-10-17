"use client";

import { Coordinates, Marker } from "@vnedyalk0v/react19-simple-maps";
import { geoCentroid } from "d3-geo";

import { GeographyType } from "@/types";

type StateLabelProps = {
  geo: GeographyType;
};

export function StateLabel({ geo }: StateLabelProps) {
  const centroid = geoCentroid(geo);
  const acronymState = geo.id;

  return (
    <Marker coordinates={centroid as Coordinates}>
      <text
        data-test={`marker-${acronymState}`}
        textAnchor="start"
        alignmentBaseline={acronymState === "PB" ? "mathematical" : "middle"}
        fontSize={2}
        fill="#fff"
        style={{ pointerEvents: "none", fontWeight: "bold" }}
      >
        {acronymState !== "DF" ? acronymState : ""}
      </text>
    </Marker>
  );
}
