import { Component } from "react";
import "./Inventario.css";

export default class Inventario extends Component {
  constructor() {
    super();
    this.initialData();
  }

  state = {
    nombre: "",
    name: "",
    result: [],
    filtro: [],
  };

  initialData = () => {
    fetch(`http://localhost:5000/`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ result: data });
      });
  };

  handleName = (e) => {
    let name = e.target.value;

    this.setState({ nombre: name });
  };

  filterByName = (e) => {
    e.preventDefault();
    let name = this.state.nombre;
    if (name.length > 2) {
      console.log("Desde filter", name);
      fetch(`http://localhost:5000/nombre?nombre=${name}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            console.log(data);
            this.setState({ result: [data[0]] });
          } else {
            this.setState({ result: "no existe" });
            this.setState({ nombre: "" });
          }
        });
    }
  };
  //http://localhost:5000/filter?nombre=orion
  inputCheck = (e, filter) => {
    console.log(filter);
    if (e.target.checked) {
      if (this.state.filtro === "") {
        this.setState({ filtro: {"NEW":`${filter}`}});
      } else {
        this.setState({ filtro: this.state.filtro+{ "NEW":`${filter}` } });
      }
    } else {
      if(this.state.filtro === `?${filter}`){
        this.setState({filtro : ""})
      }
    }
  };
  //http://localhost:5000/filter?
  aplicarFiltro = () => {
    fetch(`http://localhost:5000/filter${this.state.filtro}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          console.log("THIS IS THE DATA", data);
          //this.setState({ result: [data[0]] });
        } else {
          console.log("SIN COINCIDENCIAS");

          //this.setState({ result: "no existe" });
          this.setState({ nombre: "" });
        }
      });
  };

  render() {
    console.log("FROM RENDER", this.state.filtro);
    return (
      <div className="InventarioContenedor">
        <div className="filterContainer">
          <form onSubmit={this.filterByName}>
            <input
              type="text"
              name="name"
              autoComplete="off"
              onChange={this.handleName}
              value={this.state.nombre}
              placeholder="Nombre de la nave"
            />
            <input type="submit" value="Buscar nave"></input>
          </form>
          <label>Filtrar por naves no tripuladas</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, {"tipo":"Nave no tripulada"});
            }}
          ></input>
          <label>Filtrar por vehículos lanzadera</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "tipo=Vehiculo lanzadera");
            }}
          ></input>
          <label>Filtrar por naves Sofkianas</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "tipo=Nave Sofkiana");
            }}
          ></input>
          <label>Filtrar por naves tripuladas</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "tipo=Nave tripulada");
            }}
          ></input>
          <label>Filtrar por naves que usan celdas fotovoltáicas</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "combustible=Celdas fotovoltaicas");
            }}
          ></input>
          <label>Filtrar por naves que usan celdas fotoneuronales</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "combustible=Celdas fotoneuronales");
            }}
          ></input>
          <label>Filtrar por naves que usan combustion quimica</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "combustible=Combustion quimica");
            }}
          ></input>
          <label>Naves que visitan planetas</label>
          <input
            type="checkbox"
            onChange={(e) => {
              this.inputCheck(e, "planetas=Sí");
            }}
          ></input>
          <div onClick={this.aplicarFiltro}>
            <h3>BOTON</h3>
          </div>
        </div>
        <div className="Tabla">
          <table>
            <tbody>
              <tr>
                <td>Nombre</td>
                <td>Misión</td>
                <td>Tipo de nave</td>
                <td>Carga</td>
                <td>Tripulación</td>
                <td>Etapa de tu proceso</td>
                <td>Combustible</td>
                <td>Distancia</td>
                <td>Planetas</td>
              </tr>

              {this.state.result.map((nave, index) => {
                return (
                  <tr key={nave.id_nave}>
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
    );
  }
}
