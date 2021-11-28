import { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import './style.css';

export default function Home() {
    const [viewPortMapVisibility, setViewPortMapVisibility] = useState(true);
    let [viewport, setViewPort] = useState({
        latitude: 37.78,
        longitude: -122.45,
        zoom: 8.5,
        width: "100vw",
        height: "100vh"
    });

    return(
        <div className="home_page">
            <div className="box_left">
                <div className="left">

                </div>
            </div>
            <div className="box_right">
                <div className="right">
                    <ReactMapGl
                        {...viewport}
                        onViewportChange={(updatedViewport) => setViewPort(updatedViewport)}
                        mapboxApiAccessToken={'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw'}
                        mapStyle={'mapbox://styles/mapbox/light-v10'}
                    >                        
                    </ReactMapGl>
                    <a className="show_map" href="/mapa">Ver mapa</a>
                </div>
            </div>
        </div>
    );
}