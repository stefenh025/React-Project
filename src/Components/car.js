import React from 'react';

class Car extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var typeSelection = this.props.selected;
    return(
      <div id="cars">
    <h1>Cars</h1>
    {typeSelection}
    <table>
      <tr>
        <th>Year Model</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
      <tr>
        <td>2013 A</td>
        <td>$32000</td>
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
        <td>2011 B</td>
        <td>$44000</td>
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
        <td>2016 B</td>
        <td>$15500</td>
        <td><button type="button">Buy now</button></td>
      </tr>
    </table>
  </div>
    )
  }
}

export default Car;