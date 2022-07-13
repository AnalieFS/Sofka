const NaveNoTripulada = require("./TipoNave/nave.no.tripulada");
const NaveSofkiana = require("./TipoNave/nave.sofkiana");
const NaveTripulada = require("./TipoNave/nave.tripulada");
const VehiculoLanzadera = require("./TipoNave/vehiculo.lanzadera");

class Naves{
    constructor(nombre, mision, tripulacion){
        this._nombre = nombre;
        this._tripulacion = tripulacion;
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
        return this._nmision;
    }
    set mision(mision){
        this._mision = mision;
    }

    crearNave(){
        if(!tripulacion && this.mision=="orbital"){
            return new VehiculoLanzadera(this._nombre, this._mision);
        }
        else if(!tripulacion && this.mision=="celeste"){
            return new NaveNoTripulada(this._nombre, this._mision);
        }
        else if(tripulacion && this.mision=="experimental"){
            return new NaveTripulada(this._nombre, this._tripulacion, this._mision);
        }
        else{
            return new NaveSofkiana(this._nombre, this._tripulacion, this._mision);
        }    
    };

    getNave(){
        return this.crearNave.informacionDeNave();
    };
}