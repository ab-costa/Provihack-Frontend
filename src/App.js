import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import Input from './components/Input';

const token = 'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw'
 
mapboxgl.accessToken = token;

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [test, setTest] = useState('');

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    },  [lat, lng]);  

    async function handleSearch() {
        const place = test.split(' ').join("%20");

        try {
            const response = await fetch(`http://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${token}`);
            const data = await response.json();

            console.log(data.features[0].center[0]);
            console.log(data.features[0].center[1]);
            
            setLat(data.features[0].center[0]);
            setLng(data.features[0].center[1]);

            console.log(lat);            
            console.log(lng);            
    
            console.log(data);
        } catch (error) {
            console.log(error.message);            
        }
    }

    return (
        <>
            <div className="box_search_map">
                <div className="box_search">
                    <input type="text" onChange={(e) => setTest(e.target.value)} value={test} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div>
                    <div className="sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>
                    <div ref={mapContainer} className="map-container" />
                </div>
            </div>
        </>
    );
}