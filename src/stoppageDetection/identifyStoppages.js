// import moment from 'moment';

// export const identifyStoppages = (gpsData, threshold) => {
//   const stoppages = [];
//   let currentStoppage = null;
  
//   for (let i = 1; i < gpsData.length; i++) {
//     const prevPoint = gpsData[i - 1];
//     const currPoint = gpsData[i];
    
//     if (prevPoint.latitude === currPoint.latitude && prevPoint.longitude === currPoint.longitude) {
//       const timeDiff = moment(currPoint.timestamp).diff(moment(prevPoint.timestamp), 'minutes');
      
//       if (currentStoppage) {
//         currentStoppage.endTime = currPoint.timestamp;
//         currentStoppage.duration += timeDiff;
//       } else {
//         currentStoppage = {
//           latitude: currPoint.latitude,
//           longitude: currPoint.longitude,
//           reachTime: prevPoint.timestamp,
//           endTime: currPoint.timestamp,
//           duration: timeDiff,
//         };
//       }
//     } else {
//       if (currentStoppage && currentStoppage.duration >= threshold) {
//         stoppages.push(currentStoppage);
//       }
//       currentStoppage = null;
//     }
//   }

//   // Push the last stoppage if it meets the threshold
//   if (currentStoppage && currentStoppage.duration >= threshold) {
//     stoppages.push(currentStoppage);
//   }
  
//   return stoppages;
// };



// stoppageDetection.js
export const identifyStoppages = (gpsData, threshold) => {
  const stoppages = [];
  let startTime = null;
  let startLocation = null;

  gpsData.forEach((point, index) => {
    if (point.speed === 0) {
      if (!startTime) {
        startTime = new Date(point.eventGeneratedTime);
        startLocation = point;
      }
    } else {
      if (startTime) {
        const endTime = new Date(point.eventGeneratedTime);
        const duration = (endTime - startTime) / (1000 * 60); // duration in minutes
        if (duration >= threshold) {
          stoppages.push({
            latitude: startLocation.latitude,
            longitude: startLocation.longitude,
            reachTime: startTime,
            endTime: endTime,
            duration: duration
          });
        }
        startTime = null;
        startLocation = null;
      }
    }
  });

  return stoppages;
};
