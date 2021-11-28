import { useState } from 'react';
import { Marker } from 'react-map-gl';
import './style.css';

export default function MarkerPopup({latitude, longitude}) {
    const [popupVisibility, setPopupVisibility] = useState(false);

    function HandlePopupVisibility() {
        setPopupVisibility(!popupVisibility);
    }
    return(
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
                        onClick={ HandlePopupVisibility}
                    />
                    {popupVisibility &&
                        <div className="popup_text">
                            You are here
                        </div>
                    }
                </div>
            </Marker>           
        </>
    );      
}