// import React, { useState, useEffect } from 'react';
// import MapView from './Component/MapView';
// import { identifyStoppages } from './stoppageDetection/identifyStoppages';

// const App = () => {
//   const [gpsData, setGpsData] = useState([]);
//   const [stoppages, setStoppages] = useState([]);
//   const [threshold, setThreshold] = useState(1); // default threshold 10 minutes

//   useEffect(() => {
//     // Fetch GPS data from the JSON file
//     fetch('gpsData.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch GPS data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         setGpsData(data);
//         const detectedStoppages = identifyStoppages(data, threshold);
//         setStoppages(detectedStoppages);
//       })
//       .catch(error => {
//         console.error('Error fetching GPS data:', error);
//       });
//   }, [threshold]);
  

//   return (
//     <div>
//       <h1>Vehicle Stoppage Identification and Visualization</h1>
//       <label>
//         Stoppage Threshold (minutes):
//         <input
//           type="number"
//           value={threshold}
//           onChange={e => setThreshold(e.target.value)}
//         />
//       </label>
//       <MapView gpsData={gpsData} stoppages={stoppages} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import MapView from './Component/MapView';
import { identifyStoppages } from './stoppageDetection/identifyStoppages';
import './App.css'

const App = () => {
  const [gpsData, setGpsData] = useState([]);
  const [stoppages, setStoppages] = useState([]);
  const [threshold, setThreshold] = useState(10); // default threshold 10 minutes

  useEffect(() => {

    fetch('gpsData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch GPS data');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setGpsData(data);
      const detectedStoppages = identifyStoppages(data, threshold);
      setStoppages(detectedStoppages);
    })
    .catch(error => {
      console.error('Error fetching GPS data:', error);
    });
}, [threshold]);

// return (
//   <div>
//     <header style={{ textAlign: 'center', margin: '20px 0' }}>
//       <h1>Vehicle Stoppage Identification and Visualization</h1>
//     </header>
//     <div className="threshold-container">
//       <label className="threshold-label">
//         Stoppage Threshold (min)
//         <input
//           type="number"
//           value={threshold}
//           onChange={e => setThreshold(Number(e.target.value))}
//           className="threshold-input"
//         />
//       </label>
//     </div>
//     <MapView gpsData={gpsData} stoppages={stoppages} />
//   </div>
// );

return (
  <div>
    <header style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>Vehicle Stoppage Identification and Visualization</h1>
    </header>
    <div className="threshold-container">
      <label className="threshold-label">
        Stoppage Threshold (min)
        <input
          type="number"
          value={threshold}
          onChange={e => setThreshold(Number(e.target.value))}
          className="threshold-input"
        />
      </label>
    </div>
    <MapView gpsData={gpsData} stoppages={stoppages} />
  </div>
);


};

export default App;
