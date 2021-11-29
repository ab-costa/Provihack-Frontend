import { useEffect, useState } from "react";
import './style.css';
// import logo from './assets/logo.svg';

export default function Header({ setViewPort, viewPortMapVisibility, setViewPortMapVisibility }) {
    const token = 'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw';

    const [lng, setLng] = useState(23.5501);
    const [lat, setLat] = useState(-46.6336);
    const [zoom, setZoom] = useState(8.5);

    const [inputPlace, setInputPlace] = useState('');

    useEffect(() => {
        handleSearch();
    }, [lat, lng]);


    async function handleSearch() {
        const place = inputPlace.split(' ').join("%20");

        try {
            const response = await fetch(`http://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${token}`);
            const data = await response.json();

            setLat(data.features[0].center[1]);
            setLng(data.features[0].center[0]);

            setViewPort({
                latitude: lat,
                longitude: lng,
                zoom: 8.5,
                width: "90vw",
                height: "70vh"
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="box_header">
            <div className="logo_div">
                <img className="logo" src="./assets/logo.svg" alt="logo" />
            </div>
            <div className="box_input_btn_search">
                <input
                    className="input_header"
                    type="text" onChange={(e) => setInputPlace(e.target.value)}
                    value={inputPlace}
                    placeholder="Pesquisa por cidade"
                />
                <button
                    className="btn_search"
                    onClick={handleSearch}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}