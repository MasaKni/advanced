import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import SignUp from './SignUp'
import Login from './Login.js'
import SignUpAdmin from './SignUpAdmin'
import LoginAdmin from './LoginAdmin'
import FirstPage from './FirstPage'
import history from './history';
import { createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import { purple } from '@material-ui/core/colors'
import Typography from "@material-ui/core/Typography";
const theme = createMuiTheme({
    palette: {
      primary: {
       
        main: '#3890a7',
        
      },
      secondary: purple
    },
    Typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      allVariants: {
        color: "black"
      },
    }
  })
function Routers() {
    return (
        <>
        <ThemeProvider theme={theme}>
        <Router>
       <Switch>
         <Route path='/' exact component={FirstPage}/>
         <Route path='/signUp' component={SignUp} />
         <Route path='/login' component={Login} />
         <Route path='/SignUpAdmin' component={SignUpAdmin} />
         <Route path='/loginAdmin' component={LoginAdmin} />
         
         
       </Switch>
       </Router>
       </ThemeProvider>
        </>
       
      );
    }
    export default Routers;