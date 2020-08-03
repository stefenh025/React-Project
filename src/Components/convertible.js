import React from 'react';

class Convertible extends React.Component{
  render(){
    return(
      <div id="convertibles">
    <h1>Convertibles</h1>
    <table>
      <tr>
        <th>Year Model</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
      <tr>
        <td>2009 F</td>
        <td>$2000</td>
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
        <td>2010 G</td>
        <td>$6000</td>
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
        <td>2012 H</td>
        <td>$12500</td>
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
        <td>2017 M</td>
        <td>$2500</td>
        <td><button type="button">Buy now</button></td>
      </tr>
    </table>
  </div>
    )
  }
}

export default Convertible;