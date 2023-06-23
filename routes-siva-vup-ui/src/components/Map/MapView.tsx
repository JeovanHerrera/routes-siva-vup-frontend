import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "./react-leaflet.css";

function MapView() {
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const limeOptions = { color: "lime" };
  return (
    <MapContainer
      center={[10.4910648, -73.2828996]}
      zoom={9}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.4910648, -73.2828996]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Polyline
        pathOptions={limeOptions}
        positions={[
          [10.4910648, -73.2828996],
          [10.4810648, -73.2828996],
          [10.4710648, -73.2828996],
        ]}
      />
    </MapContainer>
  );
}

export default MapView;
