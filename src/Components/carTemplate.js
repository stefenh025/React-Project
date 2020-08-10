import React from 'react';

export default class Car extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedIndex){
    let selectedCar = this.props.car[selectedIndex].model;
    let selectedYear = this.props.car[selectedIndex].year;
    let selectedPrice = this.props.car[selectedIndex].price;
    let selectedType = this.props.car[selectedIndex].type;
    this.props.handleBuyClick(selectedCar, selectedYear, selectedPrice, selectedType);
  }
  render(){
    if (this.props.newOnly){
      return(
        <div className="fontStyle">
        <h3>Pick a {this.props.name} below!</h3>
          {(this.props.car.filter(car => car.newCar === true)).map((car, index) => (
            <table key={index} classNameName="table table-striped">
            <thead className="thead-light">
              <tr>
                <th className="col-3">Year</th>
                <th className="col-3">Model</th>
                <th className="col-3">Price</th>
                <th className="col-3">Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-3">{car.year}</td>
                <td className="col-3">{car.model}</td>
                <td className="col-3">{car.price}</td>
                <td className="col-3">
                  <button 
                    className="btn btn-secondary" 
                    type="button" 
                    onClick={e => this.handleClick(index)}
                  >
                  Buy
                  </button>
                </td>
              </tr>
            </tbody>
            </table>
        ))}
      </div>
      )
    }
    else{
    return(
      <div className="fontStyle">
        <h3>Pick a {this.props.name} below!</h3>
          {(this.props.car).map((car, index) => (
            <table key={index} className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th className="col-3">Year</th>
                <th className="col-3">Model</th>
                <th className="col-3">Price</th>
                <th className="col-3">Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-3">{car.year}</td>
                <td className="col-3">{car.model}</td>
                <td className="col-3">{car.price}</td>
                <td className="col-3">
                  <button 
                    className="btn btn-secondary" 
                    type="button"  
                    onClick={e => this.handleClick(index)} 
                  >
                  Buy
                  </button>
                </td>
              </tr>
            </tbody>
            </table>
        ))}
      </div>
    )
    }
  }
}
