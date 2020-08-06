import React from 'react';

class Convertible extends React.Component{
  render(){
    if(this.props.newOnly === true){
      return(
      <div>
        <h1>Convertibles</h1>
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
        <td>2017 M</td>
        <td>$2500</td>
        <td><button type="button">Buy now</button></td>
      </tr>
      </tbody>
    </table>
    </div>
      )
    }
    else{
    return(
      <div id="convertibles">
    <h1>Convertibles</h1>
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
        <td>2009 F</td>
        <td>$2000</td>
        <td><button type="button">Buy now</button></td>
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
        <td>2010 G</td>
        <td>$6000</td>
        <td><button type="button">Buy now</button></td>
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
        <td>2012 H</td>
        <td>$12500</td>
        <td><button type="button">Buy now</button></td>
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
        <td>2017 M</td>
        <td>$2500</td>
        <td><button type="button">Buy now</button></td>
      </tr>
      </tbody>
    </table>
  </div>
    )
    }
  }
}

export default Convertible;