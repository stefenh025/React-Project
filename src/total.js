import React from 'react';

export default class Total extends React.Component{
  render(){
    return(
      <p>Total price of cars bought: {this.props.totalPrice}</p>
    )
  }
}