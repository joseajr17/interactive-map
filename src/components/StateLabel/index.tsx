"use client";

import { Coordinates, Marker } from "@vnedyalk0v/react19-simple-maps";
import { geoCentroid } from "d3-geo";

import { GeographyType } from "@/types";

type StateLabelProps = {
  geo: GeographyType;
};

export function StateLabel({ geo }: StateLabelProps) {
  const centroid = geoCentroid(geo);
  const estadoSigla = geo.id;

  return (
    <Marker coordinates={centroid as Coordinates}>
      <text
        textAnchor="start"
        alignmentBaseline={estadoSigla === "PB" ? "mathematical" : "middle"}
        fontSize={2}
        fill="#fff"
        style={{ pointerEvents: "none", fontWeight: "bold" }}
      >
        {estadoSigla !== "DF" ? estadoSigla : ""}
      </text>
    </Marker>
  );
}
