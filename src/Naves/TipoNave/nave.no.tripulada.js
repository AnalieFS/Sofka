class NaveNoTripulada extends Naves{
    
    constructor(nombre, mision){
        super(nombre, mision); //contructor clase padre
        this._planetas = true;
    }

    get planetas(){
        return this._planetas;
    }

    set planetas(planetas){
        this._planetas = planetas;
    }

    combustible(){
        return "Celdas fotovoltáicas";
    }

    distanciaOrbital(){
        return "Cada vez más lejos";
    }

    tipo(){
        return "Nave no tripulada";
    }

    visitarPlaneta();

    abandonarPlaneta();

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia orbital" : this.distanciaOrbital(), 
            "planetas" : this._planetas
        };
    }
    
}