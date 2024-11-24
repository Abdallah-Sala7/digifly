"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { cn } from "@/lib/utils";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { useEffect } from "react";

const DigiflyMap = () => {
  useEffect(() => {
    return () => {
      const leafletMapContainers =
        document.querySelectorAll<HTMLDivElement>(".leaflet-container");
      leafletMapContainers.forEach((container) => {
        if ((container as any)._leaflet_id !== undefined) {
          delete (container as any)._leaflet_id;
        }
      });
    };
  }, []);

  return (
    <MapContainer
      center={[30.0615128, 31.3370354]}
      zoom={35}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: 1 }}
    >
      <TileLayer
        // attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[30.0615128, 31.3370354]}
        icon={L.icon({
          iconUrl: "/marker.png",
          iconSize: [35, 35],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        })}
        eventHandlers={{
          click: () => {
            window.open("https://digiflyeg.com", "_blank");
          },
        }}
      >
        <Tooltip
          direction="top"
          sticky
          className={cn(
            "!bg-primary !text-white !border-0 !shadow-none !opacity-100 !py-6 !px-5 !rounded-lg !text-sm !text-center",
            "!absolute !-top-14 !left-0 !right-auto font-sans",
            "after:w-6 after:h-6 after:absolute after:left-1/2 after:top-full after:-translate-y-1/2 after:bg-primary after:rotate-45 before:!hidden"
          )}
        >
          <p className="text-white">
            شركة <span className="font-semibold text-secondary">ديجى</span>{" "}
            <span className="font-semibold">فلاي</span> ترحب بكم
          </p>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default DigiflyMap;
