import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CrearNuevo from './Components/Inicio.js/CrearNuevo/CrearNuevo';
import Inventario from "./Components/Inventario/Inventario";

function App() {
  return (
    <div>      
      <CrearNuevo></CrearNuevo>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/Inventario" element={<Inventario/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
