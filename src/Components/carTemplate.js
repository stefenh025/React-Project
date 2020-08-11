import React from 'react';

export default class Car extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleClick(selectedIndex){
    let selectedCar, selectedYear, selectedPrice, selectedType;
      selectedCar = this.props.car[selectedIndex].model;
      selectedYear = this.props.car[selectedIndex].year;
      selectedPrice = this.props.car[selectedIndex].price;
      selectedType = this.props.car[selectedIndex].type;
    this.props.handleBuyClick(selectedCar, selectedYear, selectedPrice, selectedType);
  }
  handleSortClick(){
    this.props.toggleSort(this.props.name);
  }
  render(){
    return(
      <div className="fontStyle">
        <h3>Pick a {this.props.name} below!</h3>
        <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th className="col-3">Year</th>
                <th className="col-3">Model</th>
                <th className="col-3">
                  Price 
                  <button className="badge" onClick={this.handleSortClick}>Sort</button>
                  </th>
                <th className="col-3">Buy</th>
              </tr>
            </thead>
          {(this.props.car).map((car, index) => (
            <tbody key={index}>
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
        ))}
        </table>
      </div>
    )
  }
}

