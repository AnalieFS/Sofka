import { Component } from "react";
import '../Inventario/Inventario.css';

export default class ListaDeNaves extends Component{
render(){
    return(
    <div className="Inventario">
    <h1 id="InventarioCohetesTitle">Inventario de cohetes</h1>
    <div className="Tabla">
      <table className="TablaStyles">
        <tbody>
          <tr id="trStyles">
            <td>Nombre</td>
            <td>Misión</td>
            <td>Tipo de nave</td>
            <td>Carga</td>
            <td>Tripulación</td>
            <td>Etapa del proceso</td>
            <td>Combustible</td>
            <td>Distancia</td>
            <td>Planetas</td>
          </tr>

          {this.props.items.map((nave, index) => {
            return (
              <tr key={index} className="Results">
                <td>{nave.nombre}</td>
                <td>{nave.mision}</td>
                <td>{nave.tipo}</td>
                <td>{nave.carga}</td>
                <td>{nave.tripulacion}</td>
                <td>{nave.quiz}</td>
                <td>{nave.combustible}</td>
                <td>{nave.distancia}</td>
                <td>{nave.planetas}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
    )
}
}