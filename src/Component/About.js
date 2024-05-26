import React from 'react';
import '../About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <ul>
        <li><strong>Project Title:</strong> Vehicle Stoppage Identification and Visualization</li>
        <li><strong>Objective:</strong></li>
        <ul>
          <li>To identify and visualize vehicle stoppages using GPS data.</li>
        </ul>
        <li><strong>Key Features:</strong></li>
        <ul>
          <li>Real-time and historical GPS data processing.</li>
          <li>Identification of stoppage locations based on user-defined threshold.</li>
          <li>Visualization of vehicle path and stoppages on a map.</li>
          <li>Detailed information display for each stoppage, including reach time, end time, and stoppage duration.</li>
        </ul>
        <li><strong>Technology Stack:</strong></li>
        <ul>
          <li>React.js for frontend development.</li>
          <li>Leaflet for map visualization.</li>
          <li>JavaScript for data processing and logic implementation.</li>
        </ul>
        <li><strong>How It Works:</strong></li>
        <ul>
          <li>The system fetches GPS data from a source (API or local file).</li>
          <li>Data is processed to identify stoppages based on speed and time thresholds.</li>
          <li>The vehicle's path and stoppages are plotted on an interactive map.</li>
          <li>Users can interact with stoppage markers to view detailed information.</li>
        </ul>
        <li><strong>Customization:</strong></li>
        <ul>
          <li>Users can adjust the stoppage detection threshold to suit specific requirements.</li>
        </ul>
      </ul>
    </div>
  );
};

export default About;
