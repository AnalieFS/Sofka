const NaveNoTripulada = require("./TipoNave/nave.no.tripulada");
const NaveSofkiana = require("./TipoNave/nave.sofkiana");
const NaveTripulada = require("./TipoNave/nave.tripulada");
const VehiculoLanzadera = require("./TipoNave/vehiculo.lanzadera");

module.exports = class Naves{
    constructor(nombre, mision, tripulacion){
        this._nombre = nombre;
        this._tripulacion = tripulacion || "0";
        this._mision = mision;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get tripulacion(){
        return this._tripulacion;
    }
    set tripulacion(tripulacion){
        this._tripulacion = tripulacion;
    }

    get mision(){
        return this._mision;
    }
    set mision(mision){
        this._mision = mision;
    }

    crearNave(){
        if(this._tripulacion === "0" && this.mision=="Lanzar carga"){
            return new VehiculoLanzadera(this._nombre, this._mision);
        }
        else if(this._tripulacion === "0" && this.mision=="Estudio de cuerpos celestes"){
            return new NaveNoTripulada(this._nombre, this._mision);
        }
        else if(this._tripulacion && this.mision=="Experimentos espaciales"){
            return new NaveTripulada(this._nombre, this._mision, this._tripulacion);
        }
        else{
            return new NaveSofkiana(this._nombre, this._tripulacion, this._mision);
        }    
    };

    getNave(){
        return this.crearNave().informacionDeNave();
    };
}