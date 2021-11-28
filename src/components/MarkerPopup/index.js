import { Marker } from 'react-map-gl';
import './style.css';

export default function MarkerPopup({ feature, latitude, longitude, handleClickMarker }) {

    return (
        <>
            <Marker
                latitude={latitude}
                longitude={longitude}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <div className="box_popup">
                    <img
                        src="./assets/marker.svg"
                        alt="marker"
                        onClick={() => {handleClickMarker("")
                    console.log("marcador", feature)}}
                    />
                </div>
            </Marker>
        </>
    );
}