class NaveSofkiana extends Naves{
    
    constructor(nombre, mision){
        super(nombre, mision); //contructor clase padre
        this._quiz = true;
    }

    get quiz(){
        return this._quiz;
    }

    set quiz(quiz){
        this._quiz = quiz;
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