import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import './styles/global.css';

const tempMin =  -2;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
const minWater = 1.5;

class App extends React.Component {
  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this);

    this.state = {
      water: minWater,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange = (e) => {
    this.setState((prevState) => {
      return this.calculateWater({
        ...prevState,
      });
    });
  }

  onStepsChange = (e) => {
    this.setState((prevState) => {
      return this.calculateWater({
        ...prevState,
        steps: e.target.value
      });
    });
  }

  onTempChange = (e) => {
    this.setState((prevState) => {
      return this.calculateWater({
        ...prevState,
        steps: e.target.value
      });
    });
  }

  calculateWater = (newState) => {
    // Calcul de la nouvelle valeur de water
    const tempIncrement = 0.02 * Math.max(newState.temperature - tempMin, 0);
    const heartIncrement = 0.0048 * Math.max(newState.heart - heartMin, 0);
    const stepsIncrement = 0.0088 * Math.max(newState.steps - stepsMin, 0);
    
    // Nouveau state
    return {
      ...newState,
      water: minWater + tempIncrement + heartIncrement + stepsIncrement
    }
  }

  render() {
      return (
      <div className="container-fluid">
        <div className="row">
          <div className="row">

            <Box 
              icon = "local_drink"
              color = "#3A85FF"
              value = {this.state.water}
              unit = "L"
            />

            <Box 
              icon = "directions_walk"
              color = "black"
              valu = {this.state.steps}
              unit = "steps"
              min = {stepsMin}
              max = {stepsMax}
              onChange = {this.onStepsChange}
            />

             <Box 
              icon = "favorite"
              color = "red"
              valu = {this.state.heart}
              unit = "bpm"
              min = {heartMin}
              max = {heartMax}
              onChange = {this.onHeartChange}
            />

            <Box 
              icon = "wb_sunny" 
              color = "yellow"
              value = {this.state.tempIncrement} 
              unit = "°C"
              min = {tempMin}
              max = {tempMax}
              onChange = {this.onTempChange}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;