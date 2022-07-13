import React, { Component } from "react";
import "./CrearNuevo.css";

function option() {}

export default class CrearNuevo extends Component {
  
  state = {
    nombre : "",
  }
  
    handleName = (e) => {
    let name = e.target.value;
    this.setState({nombre : name});
    if (name.length > 2) {
      fetch(`http://localhost:5000/nombre?nombre=${name}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.length===0){
                this.setState({nombre : name})
            }
            else{
                this.setState({nombre : ""})
                window.alert("Nombre no disponible")
            }
        });
    }
  };

  render() {
    return (
      <div className="CrearNuevoContainer">
        <div className="FormContainer">
          <h1>ESTACIÓN ESPACIAL SOFKA</h1>
          <h2>¡Bienvenido a la fábrica de creación de naves!</h2>
          <p>
            Para crear una nueva nave que cumpla tus características envía
            completamente diligenciado el formulario, de lo contrario, si
            quieres ver nuestro inventario de naves presiona "ver inventario"
          </p>
          <br />
          <form className="Form">
            <label>Ponle un nombre a tu nave (Mínimo 3 letras)</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={this.handleName}
              value={this.state.nombre}
            />
            <label>¿Tu nave lleva tripulación?</label>
            <select onClick={this.handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>

            <input type="submit" value="¡Crear nave!"></input>
          </form>
        </div>
        <div></div>
      </div>
    );
  }
}
