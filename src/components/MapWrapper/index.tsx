"use client";

import { ComposableMap, ZoomableGroup } from "@vnedyalk0v/react19-simple-maps";
import type { Longitude, Latitude } from "@vnedyalk0v/react19-simple-maps";

type MapWrapperProps = {
  children: React.ReactNode;
  isMobile?: boolean;
};

const handleFilter = () => false;

export function MapWrapper({ children, isMobile = false }: MapWrapperProps) {
  const zoomValue = isMobile ? 7.6 : 6.5;
  const centerValue = isMobile ? [-54, -12] : [-53, -14];

  return (
    <div className="h-full">
      <ComposableMap className="w-full h-full" data-test="brazil-map">
        <ZoomableGroup
          center={centerValue as [Longitude, Latitude]}
          zoom={zoomValue}
          filterZoomEvent={handleFilter}
          data-test="zoomable-group"
        >
          {children}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
