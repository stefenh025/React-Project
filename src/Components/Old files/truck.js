import React from 'react';

class Truck extends React.Component{
  render(){
    if(this.props.newOnly === true){
      return(
      <div>
      <h1>Trucks</h1>
      <table>
        <thead>
        <tr>
          <th>Year Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2014 D</td>
          <td>18000</td>
          <td><button type="button" value="18000" onClick={e => this.props.handleBuyClick(e.target.value)}>Buy now</button></td>
        </tr>
        </tbody>
      </table>
      </div>
      )
    }
    else{
    return(
      <div id="trucks">
      <h1>Trucks</h1>
      <table>
        <thead>
        <tr>
          <th>Year Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2014 D</td>
          <td>18000</td>
          <td><button type="button" value="18000" onClick={e => this.props.handleBuyClick(e.target.value)}>Buy now</button></td>
        </tr>
        </tbody>
      </table>
      <table>
        <thead>
        <tr>
          <th>Year Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2013 E</td>
          <td>$5200</td>
          <td><button type="button" value="5200" onClick={e => this.props.handleBuyClick(e.target.value)}>Buy now</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    )
    }
  }
}

export default Truck;