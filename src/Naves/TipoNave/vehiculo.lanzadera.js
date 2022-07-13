const NavesInterfaz = require("../naves.interfaz");

module.exports = class VehiculoLanzadera extends NavesInterfaz{
    
    constructor(nombre, mision, carga){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._carga = carga;
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
    get carga(){
        return this._carga;
    }

    set carga(carga){
        this._carga = carga;
    }

    combustible(){
        return "Combustión química";
    }

    distanciaOrbital(){
        return "Órbita baja";
    }
    
    tipo(){
        return "Vehículo lanzadera";
    }

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia orbital" : this.distanciaOrbital(), 
            "carga" : this._carga
        };
    }
    
}