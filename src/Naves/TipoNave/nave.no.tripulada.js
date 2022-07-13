const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveNoTripulada extends NavesInterfaz{
    
    constructor(nombre, mision){
        super(); //contructor clase padre
        this._planetas = true;
        this._nombre = nombre;
        this._mision = mision;
    }

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
        return this._nmision;
    }
    set mision(mision){
        this._mision = mision;
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