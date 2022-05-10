import React from "react";
import './App.css'
import Axios from "axios";
import { render } from "@testing-library/react";



export default function Skills() {
    const[dataR,setData]= React.useState([]);
    React.useEffect(()=>{
  Axios.get("/api/select").then((response) => {
      console.log(response.data)
    setData(response.data)}
    );},[])
    return (
        <div className="AllSkills">
            <div className="skills">
                <p className="heading">
                    Ball Skills<br></br>
                </p>
                <hr className="head"></hr>
                <p className="info">
                    <table>
                        <tr>
                            <td>Ball Control:
                            {dataR.map((val)=>{
                           return<null> {val.skill_ball_control}</null>
                        }
                        )}
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Dribbling:  {dataR.map((val)=>{
                           return<null> {val.dribbling}</null>
                        }
                        )}

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Preferred foot
                            :  {dataR.map((val)=>{
                           return<null> {val.preferred_foot}</null>
                        }
                        )}




                            </td>
                            <td></td>
                        </tr>

                    </table>


                </p>
            </div>
            <div className="skills item3">
                <p className="heading">
                    Passing<br></br>
                </p>
                <hr className="head"></hr>
                <p className="info">
                    <table>
                        <tr>
                            <td>Crossing
                            :  {dataR.map((val)=>{
                           return<null> {val.attacking_crossing}</null>
                        }
                        )}

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Short Passing
                            :  {dataR.map((val)=>{
                           return<null> {val.attacking_short_passing}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Long Passing
                            :  {dataR.map((val)=>{
                           return<null> {val.skill_long_passing}</null>
                        }
                        )}

                            </td>
                            <td></td>
                        </tr>
                    </table>

                </p>
            </div>
            <div className="skills">
                <p className="heading">
                    Goalkeeper<br></br>
                </p>
                <hr className="head"></hr>
                <p className="info">

                    <table>
                        <tr>
                            <td>GK Diving
                            :  {dataR.map((val)=>{
                           return<null> {val.gk_diving}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GK Positioning
                            :  {dataR.map((val)=>{
                           return<null> {val.gk_positioning}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>GK Kicking
                            :  {dataR.map((val)=>{
                           return<null> {val.gk_kicking}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                    </table>

                </p>
            </div>
            <div className="skills item4">
                <p className="heading">
                    Physical<br></br>
                </p>
                <hr className="head"></hr>
                <p className="info">
                    <table>
                        <tr>
                            <td>Acceleration
                            :  {dataR.map((val)=>{
                           return<null> {val.movement_acceleration}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Stamina
                            :  {dataR.map((val)=>{
                           return<null> {val.power_stamina}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Strength

                            :  {dataR.map((val)=>{
                           return<null> {val.power_strength}</null>
                        }
                        )}

                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Balance
                            :  {dataR.map((val)=>{
                           return<null> {val.movement_balance}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Sprint Speed
                            :  {dataR.map((val)=>{
                           return<null> {val.movement_sprint_speed}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Jumping
                            :  {dataR.map((val)=>{
                           return<null> {val.power_jumping}</null>
                        }
                        )}


                            </td>
                            <td></td>
                        </tr>

                    </table>
                </p>
            </div>



        </div>

    );
}