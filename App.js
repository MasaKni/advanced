import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PersonalPhoto } from './info.js' 
import NavigationBar from './navigationBar.js';
import Details from './details.js';
import Data from './info.js'
import Skills from './skills.js';
/*import { NavLink, Router, Routes } from "react-router-dom";
import { Route, Link } from 'react-router-dom'; */
import A12 from './Coach.js';

export default function App() {

  return (
    <div className="App" >
      <NavigationBar />
      <div className='content'>
        <div className='components'>
          <PersonalPhoto />
          <Details />

        </div>
      </div>



    </div>
  );


}

