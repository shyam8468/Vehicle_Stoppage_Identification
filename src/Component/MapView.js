// import React from 'react';
// import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import StoppageMarker from './StoppageMarker';

// const MapView = ({ gpsData, stoppages }) => {
//     if (!gpsData || gpsData.length === 0) {
//         return <div>Loading...</div>; // or display a message
//       }
//     const positions = gpsData.map(point => [point.latitude, point.longitude]);

//   return (
//     <MapContainer center={[gpsData[0].latitude, gpsData[0].longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Polyline positions={positions} color="blue" />
//       {stoppages.map((stoppage, idx) => (
//         <Marker key={idx} position={[stoppage.latitude, stoppage.longitude]}>
//           <Popup>
//             <div>
//               <p><strong>Reach Time:</strong> {stoppage.reachTime}</p>
//               <p><strong>End Time:</strong> {stoppage.endTime}</p>
//               <p><strong>Duration:</strong> {stoppage.duration} minutes</p>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapView;



// import React from 'react';
// import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import StoppageMarker from './StoppageMarker';
// //import { identifyStoppages } from './stoppageDetection';

// const MapView = ({ gpsData, stoppages }) => {
//   if (!gpsData || gpsData.length === 0) {
//     return <div>Loading...</div>; // or display a message
//   }

//   //const stoppages = identifyStoppages(gpsData);

//   const positions = gpsData.map(point => [point.latitude, point.longitude]);

//   return (
//     <MapContainer center={[gpsData[0].latitude, gpsData[0].longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Polyline positions={positions} color="blue" />
//       {stoppages && stoppages.map((stoppage, idx) => (
//         <StoppageMarker key={idx} stoppage={stoppage} />
//       ))}
//     </MapContainer>
//   );
// };

// export default MapView;



// MapView.js
import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import StoppageMarker from './StoppageMarker';

const MapView = ({ gpsData, stoppages }) => {
  if (!gpsData || gpsData.length === 0) {
    return <div>Loading...</div>;
  }

  const positions = gpsData.map(point => [point.latitude, point.longitude]);

  return (
    <MapContainer center={[gpsData[0].latitude, gpsData[0].longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={positions} color="blue" />
      {stoppages && stoppages.map((stoppage, idx) => (
        <StoppageMarker key={idx} stoppage={stoppage} />
      ))}
    </MapContainer>
  );
};

export default MapView;

