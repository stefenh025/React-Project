import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'
import Car from './Components/car.js';
import Truck from './Components/truck.js';
import Convertible from './Components/convertible.js';

export default class App extends React.Component{
  render(){
    return(
      <div class="container">
        <Header />
        <Car />
        <Truck />
        <Convertible />
      </div>
    )
  }
}

