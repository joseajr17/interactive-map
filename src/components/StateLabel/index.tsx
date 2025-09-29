"use client";

import { Marker } from "@vnedyalk0v/react19-simple-maps";
import { geoCentroid } from "d3-geo";

type StateLabelProps = {
  geo: any;
};

export function StateLabel({ geo }: StateLabelProps) {
  const centroid = geoCentroid(geo);
  const estadoSigla = geo.id; // sigla ou nome

  return (
    <Marker coordinates={centroid}>
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
