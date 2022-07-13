const Naves = require("../Naves/naves");

const controller = {};

controller.getAll = (req, res) => {
  //Estableciendo conexión
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM naves", (err, naves) => {
      if (err) {
        res.json(err);
      }
      //si la query es exitosa retorna todas las naves de la tabla
      res.json(naves);
    });
  });
};

controller.postNave = (req, res) => {
  let nave = new Naves(req.body.nombre, req.body.mision, req.body.tripulacion);
  let crearNave = nave.getNave();

  switch (crearNave.tipo) {
    case "Nave no tripulada": {
      crearNave.planetas = req.body.planetas;
    }
    case "Vehiculo lanzadera": {
      crearNave.carga = req.body.carga;
    }
    case "Nave Sofkiana": {
      crearNave.quiz = req.body.quiz || "0";
    }
  }
  const dataSet1 = {
    nombre: crearNave.nombre,
    mision: crearNave.mision,
    tipo: crearNave.tipo,
    tripulacion: crearNave.tripulacion || "0",
  };

  console.log("DT1", dataSet1);
  console.log("NAVE CREADA", crearNave);
  const dataSet2 = crearNave;
  console.log("DT2", dataSet2);

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
        //Control de duplicados
        if (err.code === "ER_DUP_ENTRY") {
          res.json({ message: "Ya existe" });
        }
      }
    });
  });
};

controller.getByName = (req, res) => {
  const getName = req.query;
  const name = Object.values(getName);
  //Estableciendo conexión
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM naves WHERE nombre=?", name, (err, naves) => {
      if (err) {
        res.json(err);
      }
      //si la query es exitosa retorna la nave
      res.json(naves);
    });
  });
};

controller.getByFilter = (req, res) => {
  const filter = req.query;
  const keys = Object.keys(filter);
  const values = Object.values(filter);

  query = "SELECT * FROM naves_config WHERE "
  for(let i=0; i<values.length; i++){
    if(i<values.length-1)
    query = query + `${keys[i]} = "${values[i]}" AND `
    else
    query = query + `${keys[i]} = "${values[i]}"`
  }
  req.getConnection((err, conn) => {
    conn.query(query, (err, naves) => {
      if (err) {
        res.json(err);
      }
      //si la query es exitosa retorna la nave
      res.json(naves);
    });
  });
};
module.exports = controller;
