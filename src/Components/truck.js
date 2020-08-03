import React from 'react';

class Truck extends React.Component{
  render(){
    return(
      <div id="trucks">
      <h1>Trucks</h1>
      <table>
        <tr>
          <th>Year Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2014 D</td>
          <td>18000</td>
          <td><button type="button">Buy now</button></td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Year Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>2013 E</td>
          <td>$5200</td>
          <td><button type="button">Buy now</button></td>
        </tr>
      </table>
    </div>
    )
  }
}

export default Truck;