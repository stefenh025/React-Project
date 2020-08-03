import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './welcome.js';
import Option from './option.js';
import Car from './car.js';
import Truck from './truck.js';
import Convertible from './convertible.js';

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

