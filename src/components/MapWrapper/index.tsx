"use client";

import { ComposableMap, ZoomableGroup } from "@vnedyalk0v/react19-simple-maps";

type MapWrapperProps = {
  children: React.ReactNode;
};

export function MapWrapper({ children }: MapWrapperProps) {
  return (
    <div className="">
      <ComposableMap>
        <ZoomableGroup
          center={[-55, -14]}
          zoom={4.3}
          minZoom={4.3}
          maxZoom={4.3}
        >
          {children}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
