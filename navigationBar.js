import React from "react";
import './App.css';
/*
import { Route, Link, Routes } from "react-router-dom";*/
import A12 from "./Coach.js";
import App from "./App.js";


/*import { NavLink } from "react-router-dom";*/

export default function NavigationBar() {
    return (

        <div>

            <div className="navigationBar">
                <ul>
                    <span className="logo">FIFA INDEX</span>
                    <div>Home</div>
                    <div>Teams</div>
                    <div>Players</div>
                    <div>Rankings</div>
                    


                </ul>


            </div>


        </div>

    );
}
