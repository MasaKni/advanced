import React from "react";
import './App.css';
import Axios from "axios";
import { render } from "@testing-library/react";

 
/*React.useEffect(()=>{

    Axios.get("http://localhost:3000/api/select").then(( response)=>
    console.log(response)
    )

},[])*/

/*constructor(props)
{
    super(props);
    this.state={ posts:[] };
 
    fetch('http://localhost:3000/api/select')
    .then(response =>{
        response.json();
    })
    .then(posts => {
        this.setState({posts})
    })
    .then( (err) => {
        console.log(err);
    })

}*/
//"proxy": "http://localhost:5000",

export default function Details() {
   const[dataR,setData]= React.useState([]);
    React.useEffect(()=>{
  Axios.get("/api/select").then((response) => {
      console.log(response.data)
    setData(response.data)}
    );},[])

 return (
        <div className="details" >
            <p className="heading">
                Player's Name:{dataR.map((val)=>{
                           return<null> {val.long_name}</null>
                        }
                        )}<br></br>
            </p>
            <hr className="head"></hr>
            <p className="info">
             <table>
                    <tr>
                        <td>Height: {dataR.map((val)=>{
                           return<null> {val.height_cm}</null>
                        }
                        )} </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weight : {dataR.map((val)=>{
                           return<null> {val.weight_kg}</null>
                        }
                        )}


                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Preferred foot: {dataR.map((val)=>{
                           return<null> {val.preferred_foot}</null>
                        }
                        )}



                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weak foot: {dataR.map((val)=>{
                           return<null> {val.weak_foot}</null>
                        }
                        )}


                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Age: {dataR.map((val)=>{
                           return<null> {val.age}</null>
                        }
                        )}



                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Birth date: {dataR.map((val)=>{
                           return<null> {val.dob}</null>
                        }
                        )}


                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Joined at: {dataR.map((val)=>{
                           return<null> {val.joined}</null>
                        }
                        )}



                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Wage: {dataR.map((val)=>{
                           return<null> {val.wage_eur}</null>
                        }
                        )}



                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Work rate: {dataR.map((val)=>{
                           return<null> {val.work_rate}</null>
                        }
                        )}



                        </td>
                        <td></td>
                    </tr>

                     
 </table>
</p> 
{/*dataR.map((val)=>{
return val.sofifa_id
}
)}*/}
        </div>
    )}