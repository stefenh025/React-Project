import React from 'react';

export default class Total extends React.Component{
  render(){
    return(
      <p class="fontStyle text-right font-weight-bold" >Total price of cars bought: {this.props.totalPrice}</p>
    )
  }
}