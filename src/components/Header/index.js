import { useState } from "react";
import './style.css';

export default function Header({ setViewPort, viewPortMapVisibility, setViewPortMapVisibility}) {
    const token = 'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw';

    const [lng, setLng] = useState(23.5501);
    const [lat, setLat] = useState(-46.6336);
    const [zoom, setZoom] = useState(9);

    const [test, setTest] = useState('');

    async function handleSearch() {
        const place = test.split(' ').join("%20");

        try {
            const response = await fetch(`http://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${token}`);
            const data = await response.json();

            console.log(data.features[0].center[0]);
            console.log(data.features[0].center[1]);
            
            setLat(data.features[0].center[1]);
            setLng(data.features[0].center[0]);

            console.log(`lat: ${lat}`);            
            console.log(`lng: ${lng}`);            
    
            console.log(data);

            console.log('antes');

            setViewPort({
                latitude: lat,
                longitude: lng,
                zoom: 8.5,
                width: "90vw",
                height: "70vh"
            });

            console.log('depois');
        } catch (error) {
            console.log(error.message);            
        }
    }


    return(
        <div className="box_header">
            <a className="link_home" href="/home">
                <h1>Mapa da <span>AUTONOMIA</span></h1>
            </a>
            <button
                className="btn_show_map"
                onClick={() => setViewPortMapVisibility(!viewPortMapVisibility)}
            >
                Show map
            </button>
            <input className="input_header" type="text" onChange={(e) => setTest(e.target.value)} value={test} />
            <button
                className="btn_search"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}