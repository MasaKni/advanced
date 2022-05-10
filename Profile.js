const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + "/public"));
const mysql = require('mysql')
const cors = require('cors');
app.use(cors({
  origin: '*'
}));
var id = '158023';
var con = mysql.createConnection({
    host: "localhost",
     user: "root",
    password: "",
    database: "nodedb"
  }); 
  /*var corsOptions = {
origin : "http://localhost:3000"
  };
  //app.use(cors(corsOptions))
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
  app.use(bodyParser.json())
  app.use(express.json())


/*  "cores": "^0.8.5",
  "cors": "^2.8.5",*/

  //const cors = require('cores');
 /* const corsOptions ={
      origin:'http://localhost:3000', 
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
  }
  app.use(cors(corsOptions));*/

app.get("/api/select" ,( req , res)=>{

    const sqlStatment= "SELECT * FROM playersoffical WHERE sofifa_id = '158023'" ;
    con.query(sqlStatment,(err,result)=>
    {
        res.send(result)
  //     console.log(result);
    });
})

app.listen(5000,() =>{
console.log("Running on port 3000");
}
)

/*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM playersoffical WHERE sofifa_id = ${id}", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
*/
