import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card from "../../component/Card/Card";

const LeafletMaps = () => {
  const coordinates = [51.505, -0.09];
  const markerIcon = new L.Icon({
    iconUrl: require("../../images/marker.png"),
    iconSize: [30, 45],
  });
  return (
    <Card
      cardHeader={
        <>
          <strong className="fs-6">Leaflet Maps</strong>
        </>
      }
      cardBodyBg="bg-light"
      cardBody={
        <>
          <MapContainer
            style={{ width: "100%", height: "100vh" }}
            center={coordinates}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates} icon={markerIcon}>
              <img
                src="https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png"
                alt="ff"
              />
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </>
      }
    ></Card>
  );
};

export default LeafletMaps;
