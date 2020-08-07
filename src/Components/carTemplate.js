import React from 'react';

export default class Car extends React.Component{
  render(){
    return(
      <div>
          {(this.props.car).map((car, index) => (
            <table key={index}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Model</th>
                <th>Price</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{car.year}</td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td><button type="button" value={car.price} onClick={e => this.props.handleBuyClick(e.target.value)} >Buy</button></td>
              </tr>
            </tbody>
            </table>
        ))}
      </div>
    )
  }
}
