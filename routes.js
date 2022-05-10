import React from "react";
import App from "./App";
import A12 from "./Coach";
import { Route, Routes } from "react-router-dom";

export default function R (){
    return(
        <div>
            <Routes>
                <Route exact path="/" component={App} ></Route>
                <Route exact path="/Coach" component={A12} />
            </Routes>
        </div>
    );
}
