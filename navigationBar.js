import React from "react";
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import A12 from "./Coach";
import App from "./App";


import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (

        <div>

            <div className="navigationBar">
                <ul>
                    <span className="logo">FIFA INDEX</span>
                    <div><Link to="/" className="link">Home</Link></div>
                    <div><Link to="/Coach" className="link">Teams</Link></div>
                    <div><Link to="/Coach" className="link">Players</Link></div>
                    <div><Link to="/Coach" className="link">Rankings</Link></div>
                    


                </ul>


            </div>


        </div>

    );
}
