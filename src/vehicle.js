import React from 'react';

import Car from './Components/carTemplate.js';
let data = require('./carObj.js');

export default class Vehicle extends React.Component{
  render(){
    let carType = this.props.selected;
    if(carType === 'all'){
      return(
        <div>
        <Car car={data.car} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="car"/>
        <Car car={data.truck} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="truck"/>
        <Car car={data.convertible} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="convertible"/>
        </div>
      )
    }
    else if (carType === 'cars'){
      return(
        <div>
        <Car car={data.car} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="car"/>
        </div>
      )
    }    
    else if(carType === 'trucks'){
      return(
        <Car car={data.truck} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="truck"/>
      )
    }
    else if(carType === 'convertibles'){
      return(
        <Car car={data.convertible} newOnly={this.props.newOnly} handleBuyClick={this.props.handleBuyClick} name="convertible"/>
      )
    }
    else{
      return null;
    }
  }
}