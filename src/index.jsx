import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component{
  render(){
    return (
      <div>
        <h1>Welcome to Reach Transportation</h1>
        <p>The best place to buy vehilcles online </p>
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        <h1>Choose Options</h1>
        <label for="new1"> New Only</label>
        <input type="checkbox" id="new1" name="newOnly"/>
        <br/>
        <label for="carType"> Select Type</label>
        <select name="carType" id="cars">
          <option value="all">All</option> 
          <option value="cars">Cars</option>
          <option value="trucks">Trucks</option>
          <option value="convertibles">Convertibles</option>
        </select>
      </div>
    )
  }
}

class Car extends React.Component{
  render(){
    return(
      <div id="cars">
    <h1>Cars</h1>
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
class Webpage extends React.Component{
  render(){
    return(
      <div>
        <Welcome />
        <Option />
        <Car />
        <Truck />
        <Convertible />
      </div>
    )
  }
}
// ReactDOM.render(<Webpage />, document.getElementById('root'));
