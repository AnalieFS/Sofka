class NaveTripulada extends Naves{
    
    constructor(nombre, mision){
        super(nombre, mision); //contructor clase padre
        this._tripulacion = true;
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