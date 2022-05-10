
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + "/public"));
const mysql = require('mysql')
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
     user: "root",
    password: "",
    database: "nodedb"
  }); 
  app.locals.data = {};
 app.post('/api/Search',(req,res)=>{
const name= req.body.name;
const workRate = req.body.workRate;
const MaxHeight = req.body.MaxHeight;
const MinHeight = req.body.MinHeight;
const MaxWeight = req.body.MaxWeight;
const MinWeight = req.body.MinWeight;
const Position = req.body.Position;
const nation = req.body.Nationality;
const Legue = req.body.Legue;
const MinWage =req.body.MinWage;
const MaxWage = req.body.MaxWage
console.log(name);
req.app.locals.data = req.body;
if(Legue != "" && name == "" && workRate == "" && MaxHeight == "" && MinHeight == "" && MaxWeight=="" && MinWeight =="" ){
  sqlStatment= "SELECT * FROM playersoffical WHERE club =  '" + Legue + "'";
}
else{
  sqlStatment= "SELECT * FROM playersoffical WHERE short_name =  '" + name + "'  AND  height_cm <  '" + MaxHeight+ "' AND height_cm > '" + MinHeight+ "' AND weight_kg  < '" + MaxWeight+ "' AND height_cm > '" + MinHeight+ "' AND weight_kg  > '" + MinWeight+ "' AND player_positions = '" + Position+ "' AND nationality = '"+nation+"' AND CLUB = '"+Legue+"'AND wage_eur < '"+MaxWage +"' AND wage_eur < '"+MinWage +"' AND work_rate = '"+ workRate+"'  ";
}
    con.query(sqlStatment,(err,result)=>
    {
        res.send(result)
        console.log(result);
    });

  })

  app.get("/api/Sending" ,( req , res)=>{
const name =req.app.locals.data.name;
const workRate = req.app.locals.data.workRate;
const MaxHeight = req.app.locals.data.MaxHeight;
const MinHeight = req.app.locals.data.MinHeight;
const MaxWeight = req.app.locals.data.MaxWeight;
const MinWeight = req.app.locals.data.MinWeight;
const Position = req.app.locals.data.Position;
const nation = req.app.locals.data.Nationality;
const Legue = req.app.locals.data.Legue;
const MinWage =req.app.locals.data.MinWage;
const MaxWage = req.app.locals.data.MaxWage
console.log(name);
console.log (workRate);
console.log(MaxHeight);
console.log(MinHeight);
console.log(MaxWeight);
console.log(MinWeight);
console.log(Position);
console.log(Legue);
console.log(MinWage);
console.log(MaxWage);


sqlStatment= "SELECT * FROM playersoffical WHERE short_name =  '"+name+"' AND  height_cm <  '"+ MaxHeight+"' AND height_cm > '"+ MinHeight+"' AND weight_kg  >  '"+ MinWeight+"' AND weight_kg  < '"+ MaxWeight+"'  AND club = '"+Legue+"' AND wage_eur < '"+MaxWage +"' AND wage_eur > '"+MinWage +"' AND work_rate = '"+ workRate+"'  ";

    con.query(sqlStatment,(err,result)=>
    {
        res.send(result)
        console.log(result);
    });

})


  app.listen(5000,() =>{
    console.log("Running on port 5000");
    }
    )


    