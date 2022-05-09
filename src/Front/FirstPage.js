import React, { useEffect, useState } from "react";
import Axios from "axios";
import history from "./history";
//import './SignUp.css';
import { Link,useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
export default function Registration() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [data,setdata] = useState({
    name:'',
    email:'',
   });

  
  

  // let history = useNavigate();
  const login = () =>
  {
     Axios.post("http://localhost:3001/login",{
      name: name,
      
      password:password,
     
     }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert(response.data[0].name);
      }
    });
  };
  useEffect (() =>{
    Axios.get("http://localhost:3001/login").then((response)=>{
      console.log(response);
    })
  },[])

  

  /*const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);
*/
  return (
    <div class="form-container">
      <div className="registration">
      
      <Button variant="contained" color="primary" href={'/SignUp'} type="submit" className="form-field"  style={{width:360,color:"green"}}  > SignUp As User </Button>

         
        <h1>{loginStatus}</h1>
     
      </div>
      
      <Button  variant="contained" color="primary" href={'/SignUpAdmin'} type="submit" className="form-field" style={{width:360}}  > SignUp As Admin </Button>
      
    </div>
  );
}
