const NaveNoTripulada = require("./TipoNave/nave.no.tripulada");
const NaveSofkiana = require("./TipoNave/nave.sofkiana");
const NaveTripulada = require("./TipoNave/nave.tripulada");
const VehiculoLanzadera = require("./TipoNave/vehiculo.lanzadera");


//Clase principal que se encarga de crear naves nuevas según sean los atributos ingresador
module.exports = class Naves{
    constructor(nombre, mision, tripulacion){
        this._nombre = nombre;
        this._mision = mision;
        this._tripulacion = tripulacion || "0";        
    }
    //getter y setter de los atributos para modificación y acceso
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get mision(){
        return this._mision;
    }
    set mision(mision){
        this._mision = mision;
    }

    get tripulacion(){
        return this._tripulacion;
    }
    set tripulacion(tripulacion){
        this._tripulacion = tripulacion;
    }    
 //Método que crea las naves
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
            return new NaveSofkiana(this._nombre, this._mision, this._tripulacion,);
        }    
    };
//Método que retorna la información de la nave creada.
    getNave(){
        return this.crearNave().informacionDeNave();
    };
}