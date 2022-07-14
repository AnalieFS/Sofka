const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveTripulada extends NavesInterfaz{
    
    constructor(nombre, mision, tripulacion){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._tripulacion = tripulacion || 1;
    }

    // Métodos get y set de atributos
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

    //Sobreescribiendo métodos heredados de clase padre

    combustible(){
        return "Combustion quimica";
    }

    distanciaOrbital(){
        return "Orbita baja";
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
            "distancia" : this.distanciaOrbital(), 
            "tripulacion" : this._tripulacion
        };
    }
    
}