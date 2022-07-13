class VehiculoLanzadera extends Naves{
    
    constructor(nombre, mision, carga){
        super(nombre, mision); //contructor clase padre
        this._carga = carga;
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