import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { PersonalPhoto } from './info'
import NavigationBar from './navigationBar';
import Details from './details';
//import Data from './info'
import Skills from './skills';
import { NavLink, Router, Routes } from "react-router-dom";
import { Route, Link } from 'react-router-dom';
import A12 from './Coach';

export default function App() {

  return (
    <div className="App">
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
