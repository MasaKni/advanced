import React from "react";
import './App.css'
import axios from "axios";


export default function Filters() {
 const [name,setName] = React.useState("");
 const [MinHeight,setMinHeight] = React.useState("");
 const [MaxHeight,setMaxHeight] = React.useState("");
 const [MinWeight,setMinWeight] = React.useState("");
 const [MaxWeight,setMaxWeight] = React.useState("");
 const [Position,setPosition] = React.useState("");
 const [Nationality,setNationality] = React.useState("");
 const [Legue,setLegue] = React.useState("");
 const [workRate,setWorkRate] = React.useState("");
 const [MinWage,setMinWage] = React.useState("");
 const [MaxWage,setMaxWage] = React.useState("");

 const[dataR,setData]= React.useState([]);
    React.useEffect(()=>{
  axios.get("/api/Sending").then((response) => {
      console.log(response.data)
    setData(response.data)}
    );},[])


const Search = () =>{
    axios.post("http://localhost:5000/api/Search",{ name:name ,MinHeight:MinHeight,MaxHeight:MaxHeight,
        workRate:workRate,MinWeight:MinWeight,MaxWeight:MaxWeight,
        Position:Position,Nationality:Nationality,Legue:Legue,
        MaxWage:MaxWage,MinWage:MinWage
    }).then(()=>{
   alert("Data Send");
    }
    )
}

    return (
        <div className='visuals'>
            <form>
                <table className="filters">
                    <tr>
                        <td><label>Name </label></td>
                        <td><input type="text" className="name" onChange={(event)=>{
                        setName(event.target.value) }}></input></td>
                    </tr>


                    <tr>
                        <td>
                            <label>Work Rate</label>
                        </td>
                        <td>
                            <select onChange={(event)=>{
                        setWorkRate(event.target.value) }}>
                            <option></option>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>

                        </select>
                        </td>
                    </tr>



                    <tr>
                        <td><label>Height</label></td>
                        <td>
                            <input type="text" placeholder="min" className="height" onChange={(event)=>{
                        setMinHeight(event.target.value) }}></input>

                            <input type="text" placeholder="max" className="height" onChange={(event)=>{
                        setMaxHeight(event.target.value) }}></input>
                        </td>

                    </tr>
                    <tr>
                        <td><label>Weight</label></td>
                        <td>
                            <input type="text" placeholder="min" className="height" onChange={(event)=>{
                        setMinWeight(event.target.value) }} 
                        ></input>
                            <input type="text" placeholder="max" className="height" onChange={(event)=>{
                        setMaxWeight(event.target.value) }}></input>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>Position</label>
                        </td>
                        <td>
                            <select onChange={(event)=>{
                        setPosition(event.target.value) }}>
                            <option></option>
                         <option>LW</option>
                         <option>RW</option>
                         <option>ST</option>
                         <option>CAM</option>
                         <option>CB</option>
                         <option>GK</option>
                         <option>LM</option>

                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Nationality</label>
                        </td>
                        <td>
                            <select onChange={(event)=>{
                        setNationality(event.target.value) }}>
                            <option></option>
                       <option>France</option>
                       <option>Poland</option>
                       <option>Portugal</option>
                       <option>Seneganl</option>
                       <option>Germany</option>
                       <option>Argentina</option>
                       <option>England</option>
                       <option>Egypt</option>
                       <option>Netherlands</option>
                       <option>Denmark</option>
                       <option>Brazil</option>
                       <option>Gapon</option>
                       <option>Spain</option>
                       <option>Italy</option>
                       <option>Serbia</option>


                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Club</label>
                        </td>
                        <td>
                            <select onChange={(event)=>{
                        setLegue(event.target.value) }}>
                            <option></option>
                        <option>Real Madrid</option>
                       <option>FC Barcelona</option> 
                        <option>Manchester City</option>
                        <option>Manchester United</option>
                        <option>Borussia Dortmund</option>
                        <option>Paris Saint-Germain</option>
                        <option>Napoli</option>
                        <option>Inter</option>
                        <option>Liverpool</option>
                        <option>Paris Saint-Germain</option>
                        <option>Lazio</option>
                        <option>FC Bayern München</option>
                        <option>Juventus</option>
                        <option>Atlético Madrid</option>
                        <option>Sporting CP</option>

                        </select>
                        </td>
                    </tr>
    
                    <tr>
                        <td>
                            <label>Wage</label>
                        </td>
                        <td>
                        <input type="text" placeholder="min" className="height" onChange={(event)=>{
                        setMinWage(event.target.value) }}></input>
                            <input type="text" placeholder="max" className="height" onChange={(event)=>{
                        setMaxWage(event.target.value) }}></input>
                        </td>
                        
                    </tr>
                    
                </table>
                <button className="Search" onClick={Search}>Search</button>
            </form>

        </div>
    );
}