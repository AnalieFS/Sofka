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
            return 1
        }
        else if(!tripulacion && this.mision=="celeste"){
            return new NaveNoTripulada();
        }
        else if(tripulacion && this.mision=="experimental"){
            return 3
        }
        else{
            return 4
        }    
    };

    combustible();
    distanciaOrbital();
    tipo();

    getNave(){
        return this.crearNave;
    };
}