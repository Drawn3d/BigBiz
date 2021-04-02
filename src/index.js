import React from 'react';
import ReactDOM from 'react-dom';
import Lequipe from "./components/Lequipe.js";
import Expertise from "./components/Expertise.js";
import Portefolio from "./components/Portefolio.js";

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Lequipe" component={Lequipe}/>
        <Route path="/Expertise" component={Expertise}/>
        <Route path="/Portefolio" component={Portefolio}/>
      </Switch>
    </Router>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();