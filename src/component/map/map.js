import React from "react";
import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api";

const Map = ()=>{
    const mapStyles = {        
        height: "100%",
        width: "50%"};
      
      const defaultCenter = {
        lat: 13.0827,
            lng: 80.2707
      }

      const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 13.0827,
            lng: 80.2707
          },
        },
        
       
      ];
      
      return (
    
         <LoadScript
           googleMapsApiKey="AIzaSyAVmeQVS1s4TVrORCHhCSS532_EdSV9SQ4">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              {locations.map((item)=><Marker key={item.name} position={item.location}/> )}
              </GoogleMap>
         </LoadScript>
      )}
export default Map;