import React from 'react';
import Welcome from './Components/welcome.js';
import Option from './Components/option.js';
import Total from './total.js';

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      totalPrice : 0,
    }

    this.handleBuyClick = this.handleBuyClick.bind(this);
  }
  handleBuyClick(price){
    let finalPrice = parseInt(price, 10);
    this.setState({
      totalPrice : (this.state.totalPrice + finalPrice)
    })
  }
  render(){
    return(
      <div>
        <Welcome />
        <div class="container">
        <Option handleBuyClick={this.handleBuyClick}/>
        <Total totalPrice={this.state.totalPrice}/>
        </div>
      </div>
    )
  }
}