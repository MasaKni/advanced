import React from "react";
import './App.css';
import Skills from "./skills.js";
import { render } from "@testing-library/react";

import Axios from "axios";

export function PersonalPhoto(){
    const[dataR,setData]= React.useState([]);
    React.useEffect(()=>{
  Axios.get("/api/select").then((response) => {
      console.log(response.data)
    setData(response.data)}
    );},[]);
   /* <script>
        document.getElementsByClassName("photo1").style.backgroundImage = "url(C:/Users/CityComp/Desktop/reee.jpg)";
    </script>
*/
    return(
        <div>
            <div className="profile">
            <div className="photo1" style={ 
   {backgroundImage:'url("C:\Users\CityComp\Desktop\Messi.jpg")"'
    }}>
               
            </div>
           
            <div className="data1">
                <div>Player's name: {dataR.map((val)=>{
                           return<null> {val.short_name}</null>
                        }
                        )}


                </div>
                <div>Nationality:{dataR.map((val)=>{
                           return<null> {val.nationality}</null>
                        }
                        )}


                </div>
            </div>
        </div>
        <Skills/>

        </div>
    );
}