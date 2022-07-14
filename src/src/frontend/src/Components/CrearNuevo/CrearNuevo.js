import React, { Component } from "react";
import "./CrearNuevo.css";

export default class CrearNuevo extends Component {


  state = {
    nombre: "", //almacena nombre creado por usuario
    mision: ["Experimentos espaciales", "Incrementar conocimientos"], //almacena el tipo de mision de la nave
    acciones: [], //almacena las acciones de la nave según sea la misión para que el usuario elija una
    text: "", //segun la acción elegida muestra un texto determinado
    showTripulacion: false,
    showMision: false,
    showAcciones: false,
    showText: false,
    showButton: false,
    misionSelected: "",
    tripulacionSelected: "0",
    accionSelected: "",
  }

  //recibe "Sí" o "No" y retorn las misiones según lleve o no tripulación la nave
  tripulation = (res) => {
    if (res === "Sí") {
      return ["Experimentos espaciales", "Incrementar conocimientos"]
    }
    else {
      return ["Estudio de cuerpos celestes", "Lanzar carga"]
    }
  }

  /*Recibe tipo de misión y retorna las acciones y el texto que ilustra qué esta 
  seleccionando el usuario, por ejemplo (res="Incrementaro conocimientos" 
  retorna text = "¿Cuántos exámentes has presentado?" acciones=[ 1, 2, 3]) */
  detalleMision = (res) => {
    if (res === "Experimentos espaciales") {
      let acciones = [1, 2, 3, 4];
      let text = "Número de astronautas en la nave"
      return [acciones, text];
    }
    else if (res === "Incrementar conocimientos") {
      let acciones = [1, 2, 3];
      let text = "¡Es la nave Sofka! ¿Cuántas pruebas has presentado?"
      return [acciones, text];
    }
    else if (res === "Lanzar carga") {
      let acciones = ["satelite", "Sonda", "Nave"];
      let text = "Tipo de carga a lanzar"
      return [acciones, text];
    }
    else {
      let acciones = ["Sí", "No"];
      let text = "¿Visitará planetas?"
      return [acciones, text];
    }
  }


  //Recibe detalles de la nave creada por el usuario y retorna el json a usar para hacer la request al backend
  jsonRequest = (nombre, mision, accion) => {
    if (mision === "Lanzar carga") {
      return { "nombre": nombre, "mision": mision, "tripulacion": "0", "carga": accion, "quiz": "N/A" }
    }
    else if (mision === "Experimentos espaciales") {
      return { "nombre": nombre, "mision": mision, "tripulacion": accion }
    }
    else if (mision === "Incrementar conocimientos") {
      return { "nombre": nombre, "mision": mision, "tripulacion": "1", "quiz": parseInt(accion) }
    }
    else {
      return { "nombre": nombre, "mision": mision, "tripulacion": "0", "planetas": accion, "quiz": "N/A" }
    }
  };

  //Verifica cambios en el input de ingreso de nombre y verifica que no exista el nombre ingresado
  handleName = (e) => {
    let name = e.target.value;
    this.setState({ nombre: name });
    if (name.length > 1) {
      fetch(`http://localhost:5000/nombre?nombre=${name}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            this.setState({ nombre: name })
            this.setState({ showTripulacion: true })
          }
          else {
            let random = Math.floor(Math.random() * 111994);
            this.setState({ nombre: this.state.nombre + `${random}` }); //Si el nombre existe le agrega un 1 para que se pueda crear uno similar
            window.alert(`Ya tenemos una nave con ese nombre, ¡tranquil@!, lo autocompletamos por ti`);//Lanza la alerta de que el nombre existe y no puede ser usado
          }
        });
    }
    else {
      this.setState({ showTripulacion: false })
    }
  };

  //Recibe si la nave tendrá o no tripulación según sea la elección del usuario en el <select/> y habilita el botón para elegir misión
  handleChange = (e) => {
    this.setState({ mision: this.tripulation(e.target.value) });
    this.setState({ showMision: true });
  }

  //Recibe la misión de la nave según sea la elección del usuario en el <select/> asigna cambios de estado incluyendo la habilitación de las acciones
  handleAction = (e) => {
    this.setState({ acciones: this.detalleMision(e.target.value)[0] });
    this.setState({ text: this.detalleMision(e.target.value)[1] });
    this.setState({ misionSelected: e.target.value })
    this.setState({ showAcciones: true });
  }

  //según sea la acción que se desempeñará en la misión según elección del usuario en el <select/> y habilita el botón para crear
  handleButton = (e) => {
    this.setState({ accionSelected: e.target.value });
    this.setState({ showButton: true });
  }

  //maneja el envío del formulario
  handleSubmit = (e) => {
    e.preventDefault(); //Evita que se recarge la página

    let query = this.jsonRequest(this.state.nombre, this.state.misionSelected, this.state.accionSelected) //Asigna a query el resultado de la función jsonRequest

    //Se crea una variable que almacena el formato a usar en el fetch con la base de datos
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    };

    //Se realiza la petición a la base de datos
    fetch("http://localhost:5000/nave", requestOptions)
      .then(response => response.json())
      .then(data => {
        //Ventana emergente que confirma la creación de la nave y redirige al inventario
        if (data) {
          window.alert("Nave creada con éxito");
          window.location.href = "/Inventario";
        }
      }).catch((e) => { if (e) { window.alert("Parece que nos faltan mecánicos, ha ocurrido un error con la creación") } } //Manejo de errores
      )
  }

  //Pregunta al usuario dado el caso en que haya diligenciado nombre si desea abandonar la página para ir a inventario
  inventario = () => {
    if (this.state.nombre.length > 0) {
      if (window.confirm("No has creado aún tu nave, ¿Deseas abandonar la página?") === true) {
        window.location.href = "/Inventario";
      }
    } else {
      window.location.href = "/Inventario";
    }
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
            Para crear una nueva nave que cumpla tus características responde las siguientes preguntas, de lo contrario, si
            lo que quieres es ver nuestro inventario de naves presiona "ver inventario"
          </p>
          <br />
          <form className="Form" onSubmit={this.handleSubmit}>
            <label>Ponle un nombre a tu nave (Mínimo 3 carácteres)</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={this.handleName}
              value={this.state.nombre}
              minLength={3}
            />
            {this.state.showTripulacion && <label>¿Tu nave lleva tripulación?</label>}
            {this.state.showTripulacion && <select onClick={this.handleChange}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>}
            {this.state.showMision && <label>¿Qué tipo de misión desempeñará?</label>}
            {this.state.showMision && <select onClick={this.handleAction}>
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
            {this.state.showButton && <input type="submit" value="¡Crear nave!"></input>}
          </form>
        </div>
      </div>
    );
  }
}
