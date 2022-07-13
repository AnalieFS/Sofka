const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveTripulada extends NavesInterfaz{
    
    constructor(nombre, mision, tripulacion){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._tripulacion = tripulacion;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get mision(){
        return this._nmision;
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

    combustible(){
        return "Combustión química";
    }

    distanciaOrbital(){
        return "Órbita baja";
    }

    tipo(){
        return "Nave tripulada";
    }

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia orbital" : this.distanciaOrbital(), 
            "tripulacion" : this._tripulacion
        };
    }
    
}