import React from 'react';
// import Car from './Components/car.js';
// import Truck from './Components/truck.js';
// import Convertible from './Components/convertible.js';

import Car from './Components/carTemplate.js';
let data = require('./carObj.js');
console.log(data.car);

export default class Vehicle extends React.Component{
  render(){
    let carType = this.props.selected;
    if (carType === 'cars'){
      return(
        <div>
        <Car car={data.car} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
        </div>
      )
    }    
    else if(carType === 'trucks'){
      return(
        <Car car={data.truck} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      )
    }
    else if(carType === 'convertibles'){
      return(
        <Car car={data.convertible} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      )
    }
    else{
      return null;
    }
  }
}