
var express = require("express");
var app = express();
var cors = require("cors");
var mysql = require("mysql");
var bodyParser = require("body-parser");

const bcrypt = require("bcrypt");
app.use(express.static(__dirname + '/public')); 

app.use(express.urlencoded({ limit: "50mb" , extended:'true' }));

app.use(express.json({ limit: "50mb" }));


app.use(cors());
/*app.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));*/
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
 
  host:'localhost',
  port:'3307',
  user:'root',
  password:'', //empty for window
  database: 'registration'

});

// connect to the database
con.connect(function (error) {
  if (error) console.log("DB connection Error ", error);
  else console.log("connected to db");
});

/*const hostname = " 192.168.1.7";
const port = "53710";
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
const USER_TABLE_NAME = "signupuser";
//request
app.get("/user", function (req, res) {
  // Connecting to the database.
  // Executing the MySQL query (select all data from the 'signupuser' table).
  con.query(
    `SELECT * FROM ${USER_TABLE_NAME}`,
    function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.

      res.send(results);
      console.log(results);
    }
  );
});
//-----------------------------------

app.get ('/api/get',function(req,res){
    
    const sqlselect="SELECT * FROM signupuser;"
    con.query(sqlselect,(err,result)=>{
       res.send(result);
       console.log(result);
    });
    })

//---------------------------------------
/*app.post ("/insert", function(req,res){
  const Name=req.body.Name
  const City=req.body.City
  const Disc=req.body.disc
  const phoneNumber=req.body.phoneNumber
  const Face=req.body.Face
  const servicesoffered=req.body.servicesoffered
  const Email=req.body.Email
  const password=req.body.password
  const resetpassword=req.body.resetpassword

  const sqlinsert =
"INSERT INTO users(Name,City,Disc,phoneNumber,Face,servicesoffered,Email,password,resetpassword) VALUES (?,?,?,?,?,?,?,?,?);"
  connection.query(sqlinsert,[Name,City,Disc,phoneNumber,Face,servicesoffered,Email,password,resetpassword],(err,result)=>{
      console.log(err);
  });
});*/
//----------------------------------------------------SignUp
//res:send sth to the frontend
//req:take sth from frontend
app.post("/SignUp", function (req, res) {
  //the text fields names
  const Name=req.body.name;
  const Email=req.body.email;
  const password=req.body.password;
  console.log(Name);
  if (Name &&
    Email &&
    password ) {

        const sqlinsert =
      `INSERT INTO signupuser(name,email,password) VALUES (?,?,?);`
      con.query(sqlinsert,[Name, Email, password],
      (err, res) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } 
});
//---------------------------//login
app.post("/login", function (req, res) {
  const Name=req.body.name;
  const password=req.body.password;
  if (Name && password) {
    console.log(Name);
    console.log(password);
    // if user fill all text input
    con.query(
      "SELECT * FROM signupuser where name=? AND password=? ", //update
      [Name,password],
     
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          res.send(result);
          console.log("welcome");
        } else {
          console.log("wrong combination");
        }
      }
    );
  }
});
//----------------------------------------------------SignUpAdmin
//res:send sth to the frontend
//req:take sth from frontend
app.post("/SignUpAdmin", function (req, res) {
  //the text fields names
  const Name=req.body.name;
  const Email=req.body.email;
  const password=req.body.password;
  console.log(Name);
  if (Name && Email && password ) {

        const sqlinsert =
      `INSERT INTO signupadmin(name,email,password) VALUES (?,?,?);`
      con.query(sqlinsert,[Name, Email, password],
      (err, res) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          res.send(result);
         
        } else {
          console.log("w");
        }
      }
    );
  } 
});
//---------------------------//loginAdmin
app.post("/loginAdmin", function (req, res) {
  const Name=req.body.name;
  const password=req.body.password;
  if (Name && password) {
    console.log(Name);
    // if user fill all text input
    con.query(
      "SELECT * FROM signupadmin where  name = ? AND password=?", //update
      [Name,password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          res.send(result);
          console.log("welcome");
        } else {
          console.log("wrong combination");
        }
      }
    );
  }
});
//------------------------------------------------------------
/*app.get("/login", (req, res) => {
  if (req.session.name) {
    res.send({ loggedIn: true, name: req.session.name });
  } else {
    res.send({ loggedIn: false });
  }

})*/
////----------------------------------------

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is listening on port 3001');
});
  
