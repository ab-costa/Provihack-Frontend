import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarkerPopup from '../../components/MarkerPopup';
import ReactMapGl from 'react-map-gl';

import './style.css';

export default function Mapa() {
    const [viewPortMapVisibility, setViewPortMapVisibility] = useState(true);
    let [viewport, setViewPort] = useState({
        latitude: 37.78,
        longitude: -122.45,
        zoom: 8.5,
        width: "90vw",
        height: "70vh"
    });

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              title: 'Mapbox',
              description: 'San Francisco, California'
            }
          }
        ]
    };

    const features = geojson.features;
    console.log(features);
    console.log(features[0].geometry.coordinates.join('').replace('.', ''));
    
    return(
        <div className="map_page">
            <div className="box_header_viewport_map">
                <Header
                    setViewPort={setViewPort}
                    viewPortMapVisibility={viewPortMapVisibility}
                    setViewPortMapVisibility={setViewPortMapVisibility}
                />
                {viewPortMapVisibility &&
                    <div className="viewport_map">
                        <ReactMapGl
                                {...viewport}
                                onViewportChange={(updatedViewport) => setViewPort(updatedViewport)}
                                mapboxApiAccessToken={'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw'}
                                mapStyle={'mapbox://styles/mapbox/light-v10'}>
                                {features.map(feature =>
                                    <MarkerPopup
                                        latitude={feature.geometry.coordinates[1]}
                                        longitude={feature.geometry.coordinates[0]}
                                    />     
                                )}
                        </ReactMapGl>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

