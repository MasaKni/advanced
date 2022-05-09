import React, { useEffect, useState } from "react";
import  Button  from '@material-ui/core/Button';
import Axios from "axios";
//import './SignUp.css';
import { Link,useHistory} from "react-router-dom";
import history from "./history";
export default function Registration(props) {
  //let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [data,setdata] = useState({
    name:'',
    email:'',
   });
   
  // let history = useNavigate();
  const register = () =>
  {
     Axios.post("SignUpAdmin",{
      name: name,
      email: email,
      password:password,
     
     })
  };
  useEffect (() =>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response);
    })
  },[])

  
  return (
    <div class="form-container">
    <div className="registration">
    <form class="register-form">
      <h1>Admin's SignUp Page</h1>
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
  
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          class="form-field"
          placeholder="Enter Email"
          name="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          id="email"
          required
        />
        
       

        <label >
          <b>Password</b>
        </label>
        <input
          id="pass"
          class="form-field"
          type="password"
          placeholder="password"
          name="pass"
          onChange={(e)=>{setPassword(e.target.value)}}
          required
        />
        <Button variant="contained" color="primary" href={'/LoginAdmin'} type="submit" className="form-field" onClick={register} > Register </Button>
        <p >
            Already have an account? <a href="/LoginAdmin">Log in</a>.
          </p>
        </form>
      </div>
     
     
    </div>
  );
}
