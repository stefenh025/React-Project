import React from 'react';

export default class Car extends React.Component{
  render(){
    return(
      <div class="fontStyle">
        <h3>Pick a {this.props.name} below!</h3>
          {(this.props.car).map((car, index) => (
            <table key={index} class="table table-striped">
            <thead class="thead-light">
              <tr>
                <th class="col-3">Year</th>
                <th class="col-3">Model</th>
                <th class="col-3">Price</th>
                <th class="col-3">Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-3">{car.year}</td>
                <td class="col-3">{car.model}</td>
                <td class="col-3">{car.price}</td>
                <td class="col-3">
                  <button class="btn btn-secondary" type="button" value={car.price} onClick={e => this.props.handleBuyClick(e.target.value)} >Buy</button>
                </td>
              </tr>
            </tbody>
            </table>
        ))}
      </div>
    )
  }
}
