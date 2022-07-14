const Naves = require("../Naves/naves");
const NaveSofkiana = require("../Naves/TipoNave/nave.sofkiana");

const controller = {};

controller.getAll = (req, res) => {
  //Estableciendo conexión
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM naves_config", (err, naves) => {
      if (err) {
        res.json(err);
      }
      //si la query es exitosa retorna todas las naves de la tabla
      res.json(naves);
    });
    if (err)
      res.json({ message: err || "Ha ocurrido un error con el inventario" });
  });
};

controller.postNave = (req, res) => {
  //Creación de objeto nave y obtención de su tipo según características
  let nave = new Naves(req.body.nombre, req.body.mision, req.body.tripulacion);
  let crearNave = nave.getNave();

  //Asignando variables según corresponda
  switch (crearNave.tipo) {
    case "Nave no tripulada": {
      crearNave.planetas = req.body.planetas;
      crearNave.quiz = "";
    }
    case "Vehiculo lanzadera": {
      crearNave.carga = req.body.carga;
      crearNave.quiz = "";
    }
    case "Nave Sofkiana": {
      let Sofkiana = new NaveSofkiana(
        req.body.nombre,
        req.body.mision,
        req.body.tripulacion,
        req.body.quiz
      );
      crearNave.quiz = Sofkiana.probabilidadEntrada();
    }
  }

  //Datos a ingresar en tabla naves
  const dataSet1 = {
    nombre: crearNave.nombre,
    mision: crearNave.mision,
    tipo: crearNave.tipo,
    tripulacion: crearNave.tripulacion || "0",
  };

  //Datos a ingresar en tabla naves_config
  const dataSet2 = crearNave;

  //Estableciendo conexión
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO naves set ?", [dataSet1], (err, nave) => {
      if (!err) {
        //si la query es exitosa inserta el objeto en la tabla naves_config
        conn.query(
          "INSERT INTO naves_config set ?",
          [dataSet2],
          (err, nave) => {
            if (err) {
              res.json(err);
            }
            //si la query es exitosa retorna las filas afectadas
            res.json(nave);
          }
        );
      } else {
        //Control de naves duplicadas
        if (err.code === "ER_DUP_ENTRY") {
          res.json({ message: "Ya existe" });
        }
      }
    });
    if (err) {
      res.json({
        message: err || "Ha ocurrido un error con la creación de la nave",
      });
    }
  });
};

controller.getByName = (req, res) => {
  const getName = req.query;
  const name = Object.values(getName);
  //Estableciendo conexión
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM naves_config WHERE nombre=?",
      name,
      (err, naves) => {
        if (err) {
          res.json(err);
        }
        //si la query es exitosa retorna la nave
        res.json(naves);
      }
    );
    if (err) {
      res.json({ message: err || "Ha ocurrido un error con la búsqueda" });
    }
  });
};

controller.getByFilter = (req, res) => {
  const filter = req.query;
  const keys = Object.keys(filter);
  const values = Object.values(filter);
  console.log(keys);

  query = "SELECT * FROM naves_config WHERE ";

  /*
A continuación se crea la query que va a consultar la DB,
para ello se debe tener en cuenta que una llave puede tener
más de un valor si el filtro de búsqueda quiere, por ejemplo,
seleccionar todas la naves "tipo=Vehiculo lanzadera" y 
"tipo=Nave no tripulada", por lo cual se consulta si la longitud
de los valores es mayor a 1 y se condiciona a que no sea un 
string debido a que su valor es mayor de 1 pero se recorrería la 
palabra más no un vector (vease 1), si el valor por llave no es 
más de 1 entonces ingresa la llave y su valor a la query con 
normalidad (vease 2)
*/

  for (let i = 0; i < keys.length; i++) {
    // (1)
    if (values[i].length > 1 && typeof values[i] !== "string") {
      for (let j = 0; j < values[i].length; j++) {
        if (i === 0 && j === 0) {
          query = query + `${keys[i]}="${values[i][j]}"`;
        } else {
          query = query + ` OR ${keys[i]} = "${values[i][j]}"`;
        }
      }
    }
    // (2)
    else if (i === 0) query = query + `${keys[i]} = "${values[i]}"`;
    else query = query + ` OR ${keys[i]} = "${values[i]}"`;
  }

  req.getConnection((err, conn) => {
    conn.query(query, (err, naves) => {
      if (err) {
        res.json(err);
      }
      //si la query es exitosa retorna las naves que cumplan el filtro
      res.json(naves);
    });
    if (err) {
      res.json({
        message: err || "Ha ocurrido un error con el filtro de búsqueda",
      });
    }
  });
};

module.exports = controller;
