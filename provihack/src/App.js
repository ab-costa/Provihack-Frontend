import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import './App.css';


mapboxgl.accessToken ="pk.eyJ1IjoibmF0YWxpYS1iYXJib3NhIiwiYSI6ImNrd2h2cjRxYzEya2kycXF3MXllOWc3cnkifQ.VFt7h46Rk7bGRVZfg5VY_w"

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <div className="App">
      <div>
      <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
}

export default App;
