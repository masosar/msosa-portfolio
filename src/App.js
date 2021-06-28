import React from "react";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Link,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
//import Test from './components/Test';
import Home from "./components";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Contacts from './components/Contacts';
import Contacts from "./components/email/Mailer";
//import CrudRestApi from './components/crudmaterialhooks/CrudRestApi';
import NemApi from "./components/crudmaterialhooks/Nodeexmysqlapi";
import Login from "./components/reduxlogin/Login";
import MaterialuiRest from "./components/crudmaterialhooks/Mui_Rest";
import Create from "./components/crudmaterialhooks/Mui_Create";
import TstCard from "./components/crudmaterialhooks/Tst_Card";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacts" component={Contacts} />
          {/* <Route path="/crudapi" component={CrudRestApi} /> */}
          <Route path="/crudapi" component={NemApi} />
          <Route path="/reduxlogin" component={Login} />
          <Route path="/muirest" component={MaterialuiRest} />
          <Route path="/create" component={Create} />
          <Route path="/test" component={TstCard} />
          <Route path="/shop" component={ShoppingCart} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
