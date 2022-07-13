const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveNoTripulada extends NavesInterfaz{
    
    constructor(nombre, mision, planetas){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._planetas = planetas || false;
    }

    // Métodos get y set de atributos
    get planetas(){
        return this._planetas;
    }

    set planetas(planetas){
        this._planetas = planetas;
    }

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

    combustible(){
        return "Celdas fotovoltaicas";
    }

    distanciaOrbital(){
        return "Cada vez mas lejos";
    }

    tipo(){
        return "Nave no tripulada";
    }

    visitarPlaneta(){};

    abandonarPlaneta(){};

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia" : this.distanciaOrbital(), 
            "planetas" : this._planetas
        };
    }
    
}