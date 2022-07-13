class Naves{
    constructor(nombre, tripulacion){
        this._nombre = nombre;
        this._tripulacion = tripulacion;
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

    crearNave(){
        if(!tripulacion && this.mision=="orbital"){
            return new VehiculoLanzadera();
        }
        else if(!tripulacion && this.mision=="celeste"){
            return new NaveNoTripulada();
        }
        else if(tripulacion && this.mision=="experimental"){
            return new NaveTripulada();
        }
        else{
            return new NaveSofkiana();
        }    
    };

    combustible();
    distanciaOrbital();
    tipo(){
        return "No identificado"
    };

    getNave(){
        return this.crearNave.informacionDeNave();
    };
}