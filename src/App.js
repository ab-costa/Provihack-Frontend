import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Mapa from './Pages/Mapa';

const token = 'pk.eyJ1IjoiYWItY29zdGEiLCJhIjoiY2t3aHZ1MnUxMTJwbTJ2b3ptNTRsNWt1YSJ9.f_53gozOVyksz9OoW59Ruw'; 

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/mapa" element={<Mapa/>} />
                {/* <Route path="/login/admin" element={<LoginAdmin />} />
                <Route path="/home/admin" element={<HomeAdmin />} /> */}
            </Routes>
        </Router>
    );
}