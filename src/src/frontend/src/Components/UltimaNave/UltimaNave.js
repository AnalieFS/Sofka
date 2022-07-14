import { Component } from 'react';
import '../Inventario/Inventario.css'
import rocket from './1.png';

export default class UltimaNave extends Component{
 render(){
    return(
    <div className="UltimoCoheteAgregadoContenedor">
    <div id="Sticker">
      <img src={rocket} alt="Rocket"></img>
    </div>
    <div className="Formating">
    <h1>Último cohete construido</h1>
    {this.props.Rocket.map((nave, index) => {
            return (
              <div key={index} className="LastRocket">
                <h1>Nombre</h1>
                <h2>{nave.nombre}</h2>
                <h1>Misión</h1>
                <h2>{nave.mision}</h2>
                <h1>Tipo de nave</h1>
                <h2>{nave.tipo}</h2>
              </div>
            );
          })}
          </div>
    </div>
 )
}}