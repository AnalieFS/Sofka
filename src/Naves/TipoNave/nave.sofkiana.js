const NavesInterfaz = require("../naves.interfaz");

module.exports = class NaveSofkiana extends NavesInterfaz{
    
    constructor(nombre, mision, tripulacion, quizNumber){
        super(); //contructor clase padre
        this._nombre = nombre;
        this._mision = mision;
        this._tripulacion = tripulacion || 1;
        this._quizNumber = quizNumber || 1;
        this.probabilidadEntrada();
    }

    // Métodos get y set de atributos
    get quizNumber(){
        return this._quiz;
    }

    set quizNumber(quizNumber){
        this._quizNumber = quizNumber;
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

    //Sobreescribiendo métodos heredados de clase padre

    combustible(){
        return "Celdas fotoneuronales";
    }

    distanciaOrbital(){
        return "El límite es el cielo";
    }

    tipo(){
        return "Nave Sofkiana";
    }

    //Método que verifica según la cantidad de exámenes presentados que tan cerca está de entrar a la nave Sofka
    probabilidadEntrada(){
        switch(this._quizNumber){
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
            "distancia" : this.distanciaOrbital(), 
            "quiz" : this.probabilidadEntrada()
        };
    }
    
}