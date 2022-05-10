import React from "react";
import './App.css';

export default function Details() {
    return (
        <div className="details">
            <p className="heading">
                Player's Name<br></br>
            </p>
            <hr className="head"></hr>
            <p className="info">

                <table>
                    <tr>
                        <td>Height</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Preferred foot</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weak foot</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Birth date</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Joined at</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Wage</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Work rate</td>
                        <td></td>
                    </tr>
                </table>

            </p>
        </div>
    );
}