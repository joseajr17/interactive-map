"use client";

import { ComposableMap, ZoomableGroup } from "@vnedyalk0v/react19-simple-maps";

type MapWrapperProps = {
  children: React.ReactNode;
};

const handleFilter = () => false;

export function MapWrapper({ children }: MapWrapperProps) {
  return (
    <div className="h-full">
      <ComposableMap className="w-full h-full">
        <ZoomableGroup
          center={[-53, -14]}
          zoom={6.5}
          filterZoomEvent={handleFilter}
        >
          {children}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
