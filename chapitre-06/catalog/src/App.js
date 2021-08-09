import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
// IMPORT CSS
import './App.css';
///IMPORT JSON 
import Data from './data.json';
///COMPONENTS + VIEWS
import Home from './views/Home';
import Film from './views/Film';
// import { data } from 'jquery';


export class App extends React.Component {
  constructor(){
    super();
this.state ={
  data:data,
};
  }
  render() {
    return (
    <BrowserRouter>
    <Switch>
      <Route
      exact="/"
      render ={(props) => <Home {...props} data={this.state.data} />}
      />
      <Route
      path ="/film/:id"
      render={(props)=> <Film {...props} data={this.state.data} />}
      />
    </Switch>
    </BrowserRouter>
    )
  }
}

export default App

