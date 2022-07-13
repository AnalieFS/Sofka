import React, { Component } from "react";
import "./CrearNuevo.css";

function tripulation(res) {
    if(res === "Sí"){
        return ["Experimentos espaciales", "Incrementar conocimientos"]
    }
    else{
        return["Estudio de cuerpos celestes", "Lanzar carga"]
    }
}

function detalleMision(res){
    if (res === "Experimentos espaciales"){
        let acciones = [1,2,3,4];
        let text = "Número de astronautas en la nave"
        return [acciones, text];
    }
    else if (res === "Incrementar conocimientos"){
        let acciones = [1,2,3];
        let text = "¿Cuántos exámenes has presentado?"
        return [acciones, text];
    }
    else if(res === "Lanzar carga"){
        let acciones = ["satelite","Sonda", "Nave"];
        let text = "Tipo de carga a lanzar"
        return [acciones, text];
   }
    else{
        let acciones = ["Sí", "No"];
        let text = "¿Visitará planetas?"
        return [acciones, text];
    }
}

export default class CrearNuevo extends Component {
  
  state = {
    nombre : "",
    mision : ["Experimentos espaciales", "Incrementar conocimientos"],
    acciones : ["a","b"],
    text : "",
    showTripulacion: false,
    showMision : false,
    showAcciones : false,
    showText : false
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
                this.setState({showTripulacion: true})
            }
            else{
                this.setState({nombre : ""})
                this.setState({showTripulacion: false})
                window.alert("Nombre no disponible")
            }
        });
    }
  };
  handleChange = (e) => {
    this.setState({mision: tripulation(e.target.value)});
    console.log(this.state.mision);
}

handleAction = (e) => {
    this.setState({acciones : detalleMision(e.target.value)[0]});
    this.setState({text : detalleMision(e.target.value)[1]});
}

  render() {
    return (
      <div className="CrearNuevoContainer">
        <div className="FormBanner"></div>
        <div className="FormContainer">
            <div className="inventarioButton"><h3>Ver inventario</h3></div>
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
            {this.state.showTripulacion&&<label>¿Tu nave lleva tripulación?</label>}
            {this.state.showTripulacion&&<select onClick={this.handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>}
           <label>¿Qué tipo de misión desempeñará?</label>
            <select onClick={this.handleAction}>
              {this.state.mision.map(opcion => (
                <option key={opcion} value={opcion.value}>                                
                    {opcion}
                </option>
              ))}
            </select>
            <label>{this.state.text}</label>
            <select onClick={this.handleButton}>
              {this.state.acciones.map(opcion => (
                <option key={opcion} value={opcion.value}>
                    {opcion}
                </option>
              ))}
            </select>
            <input type="submit" value="¡Crear nave!"></input>
          </form>
        </div>
      </div>
    );
  }
}
