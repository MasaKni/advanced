import React from "react";
import './App.css'

export default function Filters() {
    return (
        <div className='visuals'>
            <form>
                <table className="filters">
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" className="name"></input></td>
                    </tr>
                    <tr>
                        <td><label>Gender</label></td>
                        <td>
                            <label for="male">Male</label>
                            <input type="radio" id="male" name="gender"></input>
                            <label for="female">Female</label>
                            <input type="radio" id="female" name="gender"></input>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Height</label></td>
                        <td>
                            <input type="text" placeholder="min" className="height"></input>
                            <input type="text" placeholder="max" className="height"></input>
                        </td>

                    </tr>
                    <tr>
                        <td><label>Width</label></td>
                        <td>
                            <input type="text" placeholder="min" className="height"></input>
                            <input type="text" placeholder="max" className="height"></input>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>Position</label>
                        </td>
                        <td>
                            <select></select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Nationality</label>
                        </td>
                        <td>
                            <select></select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>League</label>
                        </td>
                        <td>
                            <select></select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Team</label>
                        </td>
                        <td>
                            <select></select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Preffered Foot</label>
                        </td>
                        <td>
                            <select>
                                <option></option>
                                <option>Right</option>
                                <option>Left</option>
                            </select>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <label>Wage</label>
                        </td>
                        <td>
                        <input type="text" placeholder="min" className="height"></input>
                            <input type="text" placeholder="max" className="height"></input>
                        </td>
                        
                    </tr>
                    
                </table>
                <button className="Search">Search</button>
            </form>

        </div>
    );
}