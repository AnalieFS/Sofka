export default function config(tripulacion){
    console.log("ENTRO")
    if(tripulacion === "Sí"){
        return ["Experimentos espaciales", "Incrementar conocimientos"]
    }
    else{
        return["Estudio de cuerpos celestes", "Lanzar carga"]
    }
}

