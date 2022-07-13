class Naves{
    constructor(nombre, mision, tripulacion){
        this.nombre = nombre;
        this.mision = mision;
        this.tripulacion = tripulacion;
    }
    crearNave(){
        if(!tripulacion && this.mision=="orbital"){
            return 1
        }
        else if(!tripulacion && this.mision=="celeste"){
            return 2
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

    getNave(){
        return this.crearNave;
    };
}