import React from 'react';

class Car extends React.Component{
  render(){
    if(this.props.newOnly === true){
      return(
        <div>
        <h1>Cars</h1>
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
          <td>2016 B</td>
          <td>$15500</td>
          <td><button type="button">Buy now</button></td>
        </tr>
        </tbody>
      </table>
      </div>
      )
    }
    else{
    return(
      <div id="cars">
    <h1>Cars</h1>
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
        <td>2013 A</td>
        <td>$32000</td>
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
        <td>2011 B</td>
        <td>$44000</td>
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
        <td>2016 B</td>
        <td>$15500</td>
        <td><button type="button">Buy now</button></td>
      </tr>
      </tbody>
    </table>
    </div>
    )
    }
  }
}

export default Car;