const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveSofkiana extends NavesInterfaz{
    
    constructor(nombre, mision, tripulacion, quiz){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._tripulacion = tripulacion;
        this._quiz = quiz;
    }

    get quiz(){
        return this._quiz;
    }

    set quiz(quiz){
        this._quiz = quiz;
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

    get tripulacion(){
        return this._tripulacion;
    }
    set tripulacion(tripulacion){
        this._tripulacion = tripulacion;
    }

    combustible(){
        return "Celdas fotoneuronales";
    }

    distanciaOrbital(){
        return "El límite es el cielo";
    }

    tipo(){
        return "Nave Sofkiana";
    }

    probabilidadEntrada(){
        switch(this._quiz){
            case 1 : return "Apenas comienzas"
            case 2 : return "A medio camino"
            case 3 : return "Espera los resultados"
        }
    }

    informacionDeNave(){
        return {
            "nombre" : this._nombre, 
            "tipo" : this.tipo(), 
            "mision" : this._mision, 
            "combustible" : this.combustible(), 
            "distancia orbital" : this.distanciaOrbital(), 
            "quiz" : this.probabilidadEntrada()
        };
    }
    
}