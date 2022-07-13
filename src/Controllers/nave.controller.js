const controller ={};

controller.getAll = (req, res) => {
    //Estableciendo conexión
  req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM naves', (err, naves) => {
        if(err){
            res.json(err);
        };
        //si la query es exitosa retorna todas las naves de la tabla
        res.json(naves);
    });
  });
};

controller.postNave = (req, res) => {
    const data = req.body;
    //Estableciendo conexión
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO naves set ?', [data], (err, nave) => {
            if(err){
                res.json(err);
            }
            //si la query es exitosa inserta el objeto en la tabla naves_config
            else{
                conn.query('INSERT INTO naves_config set ?', [data], (err, nave) => {
                    if(err){
                        res.json(err);
                    }})
               //si la query es exitosa retorna las filas afectadas
               res.json(nave);            }      
           
        });
      });
}

controller.getByFilter =  (req, res) => {
    const filter = req.query;
    const keys = Object.keys(filter);
    const values = Object.values(filter);
    console.log("keys",keys)
    console.log("values",values)
   
}
module.exports = controller;