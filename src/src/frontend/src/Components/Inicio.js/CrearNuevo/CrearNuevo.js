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

function jsonRequest(nombre, mision, accion){
  if(mision ==="Lanzar carga"){
    return {"nombre":nombre, "mision" : mision, "tripulacion":"0", "carga":accion, "quiz": "N/A"}
  }
  else if(mision === "Experimentos espaciales"){
    return {"nombre":nombre, "mision" : mision, "tripulacion":accion}
  }
  else if(mision === "Incrementar conocimientos"){
    return {"nombre":nombre, "mision" : mision, "tripulacion":"1", "quiz":accion}
  }
  else{
    return {"nombre":nombre, "mision" : mision, "tripulacion":"0", "planetas":accion, "quiz":"N/A"}
  }
};

export default class CrearNuevo extends Component {
  
  state = {
    nombre : "",
    mision : ["Experimentos espaciales", "Incrementar conocimientos"],
    acciones : [],
    text : "",
    showTripulacion: false,
    showMision : false,
    showAcciones : false,
    showText : false,
    showButton : false,
    misionSelected : "",
    tripulacionSelected : "0",
    accionSelected : "",
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
    else{
      this.setState({showTripulacion: false})
    }
  };
  handleChange = (e) => {
    this.setState({mision: tripulation(e.target.value)});
    this.setState({showMision : true});
}

handleAction = (e) => {
    this.setState({acciones : detalleMision(e.target.value)[0]});
    this.setState({text : detalleMision(e.target.value)[1]});
    this.setState({misionSelected : e.target.value})
    this.setState({ showAcciones : true});
}

handleButton = (e) =>{
  this.setState({accionSelected : e.target.value});
  this.setState({showButton : true});
}

handleSubmit = (e) => {
  e.preventDefault();
  let query = jsonRequest(this.state.nombre, this.state.misionSelected, this.state.accionSelected)
  console.log(query)
  const requestOptions = {
    method : 'POST',
    headers : { 'Content-Type':'application/json'},
    body: JSON.stringify(query)
  };
  fetch("http://localhost:5000/nave", requestOptions)
  .then(response => response.json())
  .then(data => {
    if(data){
      window.alert("Nave creada con éxito");
      window.location.href="/Inventario";      
    }
  })
}

inventario = () =>{
  window.location.href="/Inventario";      
}

  render() {
    return (
      <div className="CrearNuevoContainer">
        <div className="FormBanner"></div>
        <div className="FormContainer">
            <div className="inventarioButton" onClick={this.inventario}><h3>Ver inventario</h3></div>
          <h1>ESTACIÓN ESPACIAL SOFKA</h1>
          <h2>¡Bienvenido a la fábrica de creación de naves!</h2>
          <p>
            Para crear una nueva nave que cumpla tus características envía
            completamente diligenciado el formulario, de lo contrario, si
            quieres ver nuestro inventario de naves presiona "ver inventario"
          </p>
          <br />
          <form className="Form" onSubmit={this.handleSubmit}>
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
           {this.state.showMision&&<label>¿Qué tipo de misión desempeñará?</label>}
           {this.state.showMision&&<select onClick={this.handleAction}>
              {this.state.mision.map(opcion => (
                <option key={opcion} value={opcion.value}>                                
                    {opcion}
                </option>
              ))}
            </select>}
           {this.state.showAcciones && <label>{this.state.text}</label>}
           {this.state.showAcciones && <select onClick={this.handleButton}>
              {this.state.acciones.map(opcion => (
                <option key={opcion} value={opcion.value}>
                    {opcion}
                </option>
              ))}
            </select>}
            {this.state.showButton &&<input type="submit" value="¡Crear nave!"></input>}
          </form>
        </div>
      </div>
    );
  }
}
