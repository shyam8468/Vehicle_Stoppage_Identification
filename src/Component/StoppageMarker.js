// // StoppageMarker.js
// import React from 'react';
// import { Marker, Popup } from 'react-leaflet';
// import StoppagePopup from './StoppagePopup';

// const StoppageMarker = ({ stoppage }) => {
//   const { latitude, longitude, reachTime, endTime, duration } = stoppage;

//   return (
//     <Marker position={[latitude, longitude]}>
//       <Popup>
//         <StoppagePopup reachTime={reachTime} endTime={endTime} duration={duration} />
//       </Popup>
//     </Marker>
//   );
// };

// export default StoppageMarker;




// StoppageMarker.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const StoppageMarker = ({ stoppage }) => {
  const icon = new L.Icon({
    iconUrl: 'image.png', // Use your stoppage marker icon URL
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <Marker position={[stoppage.latitude, stoppage.longitude]} icon={icon}>
      <Popup>
        <div>
          <p><strong>Reach Time:</strong> {stoppage.reachTime.toString()}</p>
          <p><strong>End Time:</strong> {stoppage.endTime.toString()}</p>
          <p><strong>Duration:</strong> {stoppage.duration.toFixed(2)} minutes</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default StoppageMarker;
