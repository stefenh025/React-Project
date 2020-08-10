import React from 'react';
import Welcome from './Components/welcome.js';
import Option from './Components/option.js';
import Total from './total.js';
let data = require('./carObj.js');

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      totalPrice : 0,
      newPrice: 0,
      newModel: '',
      newYear: 0,
      newType: '',
    }

    this.handleBuyClick = this.handleBuyClick.bind(this);
  }
  handleBuyClick(sModel, sYear, sPrice, sType){
    this.setState({
      totalPrice : (this.state.totalPrice + sPrice),
    })
    let newVehicle = {
      year: sYear,
      model: sModel,
      price: sPrice,
      type: sType,
    }
    data.buyList.push(newVehicle);
    console.log(data.buyList);
  }
  render(){
    return(
      <div>
        <Welcome />
        <div className="container">
        <Option handleBuyClick={this.handleBuyClick}/>
        <Total totalPrice={this.state.totalPrice}/>
        </div>
      </div>
    )
  }
}