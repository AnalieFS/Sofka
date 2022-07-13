import { response } from "express";
import React, { Component } from "react";
import "./inicio.css";
import config from "./inicioConfig";

export default class Inicio extends Component {

    state = {
        opciones : ["Experimentos espaciales", "Incrementar conocimientos"],
        acciones : ["a","b"],
        text : "",
        visible : false,
        mision : false,
        tripulacion : false,
        button : false
    }  

    handleName = (e) => {
        var nombre = e.target.value;
        if(nombre.length > 2){
            this.setState({tripulacion : true})
        }
    }
    handleButton = () => {
        this.setState({button : true})
    }

    handleChange = (e) => {
        this.setState({mision : true});
        this.setState({opciones: config(e.target.value)});
      };

      handleAction = (e) => {
        this.setState({visible : true});
        if (e.target.value === "Experimentos espaciales"){
            this.setState({acciones: [1,2,3,4]});
            this.setState({text : "Número de astronautas en la nave"})
        }
        else if (e.target.value === "Incrementar conocimientos"){
            this.setState({acciones: [1,2,3]});
            this.setState({text : "¿Cuántos exámenes has presentado?"})
        }
        else if(e.target.value === "Lanzar carga"){
            this.setState({acciones: ["satelite","Sonda", "Nave"]});
            this.setState({text : "Tipo de carga a lanzar"})
        }
        else{
            this.setState({acciones: ["Sí", "No"]});
            this.setState({text : "¿Visitará planetas?"})
        }
      };

  render() 
  {
    
    return (
      <div className="InicioContainer">
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
            <label>
              Ponle un nombre a tu nave (Mínimo 3 letras)
            </label>
            <input type="text" name="name" autoComplete="off" onChange={this.handleName}/>
            {this.state.tripulacion&&<label>¿Tu nave lleva tripulación?</label>}
            {this.state.tripulacion&&<select onClick={this.handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>}
            {this.state.mision&&<label>¿Qué tipo de misión desempeñará?</label>}
            {this.state.mision&&<select onClick={this.handleAction}>
              {this.state.opciones.map(opcion => (
                <option key={opcion} value={opcion.value}>                                
                    {opcion}
                </option>
              ))}
            </select>}
            {this.state.visible&&<label>{this.state.text}</label>}
            {this.state.visible&&<select onClick={this.handleButton}>
              {this.state.acciones.map(opcion => (
                <option key={opcion} value={opcion.value}>
                    {opcion}
                </option>
              ))}
            </select>}
            {this.state.button&&<input type="submit" value="¡Crear nave!"></input>}
          </form>
        </div>
        <div></div>
      </div>
    );
  }
}
