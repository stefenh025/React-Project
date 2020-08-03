import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/welcome.js';
import Option from './Components/option.js';
import Car from './Components/car.js';
import Truck from './Components/truck.js';
import Convertible from './Components/convertible.js';

export default class App extends React.Component{
  render(){
    return(
      <div class="container">
        <Welcome />
        <Option />
        <Car />
        <Truck />
        <Convertible />
      </div>
    )
  }
}

