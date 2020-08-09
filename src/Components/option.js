import React from 'react';
import Vehicle from '../vehicle.js';

class Option extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: 'all',
      newOnly: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleChange(e){
    this.setState({selected: e.target.value});
  }
  handleCheck(e){
    this.setState({newOnly : !(this.state.newOnly)});

  }
  
  render(){
    return(
      <div class="fontStyle">
        <div class="border-bottom pb-3">
        <h1>Choose Options</h1>
        <label htmlFor="new1"> New Only </label>
        <input type="checkbox" id="new1" name="newOnly" onClick={this.handleCheck}/>
        <br/>
        <div class="dropdown">
          Sort by Type
        <select class="btn dropdown-toggle" name="carType" id="cars" onChange={this.handleChange}>
          <option value="all">All</option> 
          <option value="cars">Cars</option>
          <option value="trucks">Trucks</option>
          <option value="convertibles">Convertibles</option>
        </select>
        </div>
        </div>        
        <Vehicle selected={this.state.selected} newOnly={this.state.newOnly} handleBuyClick={this.props.handleBuyClick}/>
      </div>
    )
  }
}

export default Option;