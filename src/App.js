import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import CrudRestApi from './components/crudmaterialhooks/CrudRestApi';
import Login from './components/reduxlogin/Login';
import MaterialuiRest from './components/crudmaterialhooks/Mui_Rest';
import Create from './components/crudmaterialhooks/Mui_Create';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/crudapi" component={CrudRestApi} />
        <Route path="/reduxlogin" component={Login} />
        <Route path="/muirest" component={MaterialuiRest} />
        <Route path="/create" component={Create} />
      </Router>
    </>
  );
}

export default App;
