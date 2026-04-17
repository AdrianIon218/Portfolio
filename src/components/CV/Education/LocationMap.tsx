import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ILocationMapProps } from "@/Interfaces/ProjectInterfaces";

export default function LocationMap({ position, title }: ILocationMapProps) {
  return (
    <MapContainer
      center={position}
      zoom={33}
      minZoom={16}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
