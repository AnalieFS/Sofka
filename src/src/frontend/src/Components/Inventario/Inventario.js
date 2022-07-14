import { Component } from "react";
import "./Inventario.css";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";

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
    showFilters: false,
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
      fetch(`http://localhost:5000/nombre?nombre=${name}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
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
      this.setState({ filtro: this.state.filtro.concat(`${filter}`) });
    } else {
      let filteringItem = this.state.filtro.filter((item) => item !== filter);
      this.setState({ filtro: filteringItem });
    }
  };
  //http://localhost:5000/filter?
  aplicarFiltro = () => {
    this.setState({ nombre: "" });
    if (this.state.filtro.length > 0) {
      var queryFilter = "";
      for (let i = 0; i < this.state.filtro.length; i++) {
        if (i === 0) {
          queryFilter = `?${this.state.filtro[i]}`;
        } else {
          queryFilter = queryFilter + `&${this.state.filtro[i]}`;
        }
      }

      fetch(`http://localhost:5000/filter${queryFilter}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            this.setState({ result: data });
          } else {
            this.setState({ result: [] });

            //this.setState({ result: "no existe" });
            this.setState({ nombre: "" });
          }
        });
    } else {
      this.initialData();
    }
  };

  showListFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
    if(this.state.showFilters){
      this.initialData();
    }
  };

  render() {
    return (
      <div className="InventarioContenedor">
        <div className="filterContainer">
          <div className="LittleFormContainer">
            <form id="LittleFormStyle" onSubmit={this.filterByName}>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={this.handleName}
                value={this.state.nombre}
                placeholder="Nombre de la nave"
              />
              <input type="submit" value="BUSCAR"></input>
            </form>
            <div onClick={this.showListFilters}>
              {!this.state.showFilters && (
                <FaSearchengin size={"2em"} id="busqueda" />
              )}
              {this.state.showFilters && (
                <MdOutlineSearchOff size={"2.2em"} id="cerrarBusqueda" />
              )}
            </div>
          </div>
          {this.state.showFilters && (
            <h2 id="FiltrosTitle">Aplicar filtro avanzado de búsqueda</h2>
          )}
          {this.state.showFilters && (
            <div className="ContainerFiltros">
              <div id="filtroItem">
                <label>Naves no tripuladas</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "tipo=Nave no tripulada");
                  }}
                ></input>
              </div>

              <div id="filtroItem">
                <label>Vehículos lanzadera</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "tipo=Vehiculo lanzadera");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Naves Sofkianas</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "tipo=Nave Sofkiana");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Naves tripuladas</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "tipo=Nave tripulada");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con celdas fotovoltáicas</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "combustible=Celdas fotovoltaicas");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con celdas fotoneuronales</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "combustible=Celdas fotoneuronales");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con combustion química</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "combustible=Combustion quimica");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Visitan planetas</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "planetas=Sí");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>En órbita baja</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "distancia=Orbita baja");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Estudio de cuerpos celestes</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "mision=Estudio de cuerpos celestes");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Lanzar carga</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "mision=Lanzar carga");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Experimentos espaciales</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "mision=Experimentos espaciales");
                  }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Incrementar conocimientos</label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    this.inputCheck(e, "mision=Incrementar conocimientos");
                  }}
                ></input>
              </div>
            </div>
          )}
          {this.state.showFilters && (
            <div className="FiltrarButton" onClick={this.aplicarFiltro}>
              <h3>FILTRAR</h3>
            </div>
          )}
        </div>
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

              {this.state.result.map((nave, index) => {
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
    );
  }
}
