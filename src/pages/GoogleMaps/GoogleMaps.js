import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Card from "../../component/Card/Card";

const GoogleMaps = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 43.653225,
    lng: -79.383186,
  };
  return (
    <Card
      cardHeader={
        <>
          <strong className="fs-6">Google Maps </strong>
        </>
      }
      cardBodyBg="bg-light"
      cardBody={
        <>
          <LoadScript>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            ></GoogleMap>
          </LoadScript>
        </>
      }
    ></Card>
  );
};

export default GoogleMaps;
