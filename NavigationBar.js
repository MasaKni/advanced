import React from "react";
import './App.css';


import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div>
            <div className="navigationBar">
                <ul>
                    <span className="logo">FIFA INDEX</span>
                    <div><a to="/Coach" className="link">Home</a></div>
                    <div><a to="/Coach" className="link">Teams</a></div>
                    <div><a to="/Coach" className="link">Players</a></div>
                    <div><a to="/Coach" className="link">Rankings</a></div>
                    
                </ul>


            </div>


        </div>

    );
}
