import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[51.110424, 17.059968]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.110424, 17.059968]}></Marker>
    </MapContainer>
  );
};

export default Map;