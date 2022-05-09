import React, { useEffect, useState } from "react";
import Axios from "axios";
import  Button  from '@material-ui/core/Button';
//import './SignUp.css';
import { Link,useNavigate } from "react-router-dom";
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
     Axios.post("http://localhost:3001/loginAdmin",{
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
    Axios.get("http://localhost:3001/loginAdmin").then((response)=>{
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
      <form class="register-form">
        <h1>Admin's Login Page</h1>
        <label >
          <b>Name</b>
        </label>
        <input
         id="first-name"
         class="form-field"
         type="text"
         placeholder="First Name"
         name="firstName"
          onChange={(e)=>{setName(e.target.value)}}
          
          required
        />
    
        
       

        <label >
          <b>Password</b>
        </label>
        <input
          id="pass"
          class="form-field"
          placeholder="password"
          name="pass"
          type='password'
          onChange={(e)=>{setPassword(e.target.value)}}
          
          required
        />
         <Button variant="contained" color="primary" type="submit" className="form-field" onClick={login} > Login </Button>
         
        <h1>{loginStatus}</h1>
        </form>
      </div>
     
     
    </div>
  );
}