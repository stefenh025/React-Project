import React from 'react';
import Car from './Components/car.js';
import Truck from './Components/truck.js';
import Convertible from './Components/convertible.js';

export default class Vehicle extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
      <Car />
      <Truck />
      <Convertible />
      </div>
    )
  }
}