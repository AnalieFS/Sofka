const NavesInterfaz = require("../naves.interfaz");

module.exports = class VehiculoLanzadera extends NavesInterfaz{
    
    constructor(nombre, mision, carga){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._carga = carga || "satelite";
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
        return "Combustion quimica";
    }

    distanciaOrbital(){
        return "Orbita baja";
    }
    
    tipo(){
        return "Vehiculo lanzadera";
    }

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia" : this.distanciaOrbital(), 
            "carga" : this._carga
        };
    }
    
}