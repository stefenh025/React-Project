import React from 'react';
import Vehicle from '../vehicle.js';
import AddListing from './addListing.js';
let data = require('../carObj.js');

class Option extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: 'all',
      newOnly: false,
      newListings: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleNewListing = this.handleNewListing.bind(this);
  }
  handleChange(e){
    this.setState({selected: e.target.value});
  }
  handleCheck(e){
    this.setState({newOnly : !(this.state.newOnly)});
  }
  handleNewListing(nYear, nModel, nPrice, nType, nNewCar){
    this.setState({
      newListings: (this.state.newListings + 1),
    });
    let newListing = {
      year: nYear,
      model: nModel,
      price: nPrice,
      type: nType,
      newCar: nNewCar,
    }
    data.newAdd.push(newListing);
    console.log(nNewCar);
  }
  render(){
    return(
      <div className="fontStyle">
        <div className="border-bottom pb-3">
        <h1>Choose Options</h1>
        <label htmlFor="new1"> New Only </label>
        <input type="checkbox" id="new1" name="newOnly" onClick={this.handleCheck}/>
        <br/>
        <div className="dropdown">
          Sort by Type
        <select className="btn dropdown-toggle" name="carType" id="cars" onChange={this.handleChange}>
          <option value="all">All</option> 
          <option value="cars">Cars</option>
          <option value="trucks">Trucks</option>
          <option value="convertibles">Convertibles</option>
        </select>
        <AddListing handleNewListing={this.handleNewListing}/>
        </div>
        </div>        
        <Vehicle selected={this.state.selected} newOnly={this.state.newOnly} handleBuyClick={this.props.handleBuyClick} data={data}/>
      </div>
    )
  }
}

export default Option;