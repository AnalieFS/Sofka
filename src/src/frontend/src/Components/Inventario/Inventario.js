import { Component } from "react";
import "./Inventario.css";
import { FaSearchengin } from "react-icons/fa";
import { MdOutlineSearchOff } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import UltimaNave from "../UltimaNave/UltimaNave";
import ListaDeNaves from "../ListaDeNaves/ListaDeNaves";

export default class Inventario extends Component {
  constructor() {
    super();
    this.initialData();
  }

  state = {
    nombre: "",
    result: [],
    filtro: [],
    showFilters: false,
    refresh: false,
    lastRocket: []
  };


  //Consulta la información existente en la base de datos
  initialData = () => {
    fetch(`http://localhost:5000/`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ result: data });
        this.setState({ lastRocket: [data[data.length - 1]] })
      });
  };

  //Manejo del cambio en el input para ingreso de nombre en búsqueda por nombre
  handleName = (e) => {
    let name = e.target.value;
    this.setState({ nombre: name });
  };

  //Si desea buscar por nombre lo consulta en la base de datos, si está brinda la información y la almacena en result
  //si no está  arroja un vector vacío, en cualquier caso habilita el botón para refrescar los resultados
  filterByName = (e) => {
    e.preventDefault(); //Evita que se recarge la página
    let name = this.state.nombre;
    if (name.length > 2) {
      fetch(`http://localhost:5000/nombre?nombre=${name}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            this.setState({ result: [data[0]] });
            this.setState({ nombre: "" });
            this.setState({ refresh: true })

          } else {
            this.setState({ result: [] });
            this.setState({ nombre: "" });
            this.setState({ refresh: true })
          }
        });
    }
  };
  //http://localhost:5000/filter?nombre=orion
  inputCheck = (e, filter) => {
    /* 
    Creación del filtro para búsqueda avanzada, si la celda es chequeada se agrega al vector filtro,
    si la celda es deseleccionada se elimina del vector    
    */
    if (e.target.checked) {
      this.setState({ filtro: this.state.filtro.concat(`${filter}`) });
    } else {
      let filteringItem = this.state.filtro.filter((item) => item !== filter);
      this.setState({ filtro: filteringItem });
    }
  };
  //http://localhost:5000/filter?combustible="Celdas fotovoltaicas"&tipo="Nave tripulada"
  //se aplica el filtro para realizar la query a la base de datos
  aplicarFiltro = () => {
    this.setState({ nombre: "" }); //si realizamos una búsqueda avanzada no se busca por nombre por lo cual dejamos en blanco su valor
    if (this.state.filtro.length > 0) {
      var queryFilter = "";
      //le damos el formato debido a la query recorriendo el vector y agregando cada item con formato a queryFilter
      for (let i = 0; i < this.state.filtro.length; i++) {
        if (i === 0) {
          queryFilter = `?${this.state.filtro[i]}`;
        } else {
          queryFilter = queryFilter + `&${this.state.filtro[i]}`;
        }
      }
      //Realizamos la consulta
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
        }).then((e)=>{if(e){window.alert("Ha ocurrido un error filtrando la información")}});
    } else {
      this.initialData();
    }
  };

  //Se carga al presionar el simbolo de "lupa" y habilita el menú de filtros
  showListFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
    if (this.state.showFilters) {
      this.initialData();
    }
  };

  //Se carga al presionar el botón refresh y se encarga de "resetear" la información de la lista
  refreshResults = () => {
    this.initialData();
    this.setState({ refresh: false })
  }

  //Redirige a la página de creación de cohete
  crearCohete = () => {
    window.location.href = "/";
  }

  render() {
    return (
      <div className="InventarioContenedor">
        <UltimaNave Rocket={this.state.lastRocket}></UltimaNave>
        <div className="filterContainer">
          <div className="LittleFormContainer">
            <form id="LittleFormStyle" onSubmit={this.filterByName}>
              <input type="text" name="name" autoComplete="off" onChange={this.handleName} value={this.state.nombre} placeholder="Nombre de la nave" />
              <input type="submit" value="BUSCAR"></input>
              <div className="FiltrarButton Crear" onClick={this.crearCohete}>
                <h3>CREAR NUEVO</h3>
              </div>
              {this.state.refresh && <FiRefreshCcw size={"2em"} id="refresh" onClick={this.refreshResults}></FiRefreshCcw>}
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
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "tipo=Nave no tripulada"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Vehículos lanzadera</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "tipo=Vehiculo lanzadera"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Naves Sofkianas</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "tipo=Nave Sofkiana"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Naves tripuladas</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "tipo=Nave tripulada"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con celdas fotovoltáicas</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "combustible=Celdas fotovoltaicas"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con celdas fotoneuronales</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "combustible=Celdas fotoneuronales"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Con combustion química</label>
                <input
                  type="checkbox" onChange={(e) => { this.inputCheck(e, "combustible=Combustion quimica"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Visitan planetas</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "planetas=Sí"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>En órbita baja</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "distancia=Orbita baja"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Estudio de cuerpos celestes</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "mision=Estudio de cuerpos celestes"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Lanzar carga</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "mision=Lanzar carga"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Experimentos espaciales</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "mision=Experimentos espaciales"); }}
                ></input>
              </div>
              <div id="filtroItem">
                <label>Incrementar conocimientos</label>
                <input type="checkbox" onChange={(e) => { this.inputCheck(e, "mision=Incrementar conocimientos"); }}
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
        <ListaDeNaves items={this.state.result}></ListaDeNaves>
      </div>
    );
  }
}
