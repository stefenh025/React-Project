import React from 'react';
import Car from './Components/car.js';
import Truck from './Components/truck.js';
import Convertible from './Components/convertible.js';

export default class Vehicle extends React.Component{
  render(){
    let carType = this.props.selected;
    
    if (carType === 'cars'){
      return(
        <Car newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      )
    }
    else if(carType === 'trucks'){
      return(
        <Truck newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      )
    }
    else if(carType === 'convertibles'){
      return(
        <Convertible newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      )
    }
    else{
      return null;
    }
  }
}