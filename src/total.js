import React from 'react';
let arr = require('./carObj.js').buyList;

export default class Total extends React.Component{
  render(){
    if(arr.length !== 0){
      return(
        <div>
        <h3>Shopping List:</h3>
        <br></br>
        {arr.map((car, index) => (
          <p key={index}>
            {car.type} {car.year} {car.model} for {car.price}
          </p>
        ))}
        <p className="fontStyle text-right font-weight-bold" >Total price of cars bought: {this.props.totalPrice}</p>
        </div>
      )
    }
    else{
      return(
      <div>
      <p className="fontStyle text-right font-weight-bold" >Total price of cars bought: {this.props.totalPrice}</p>
      </div>
    )
      }
  }
}