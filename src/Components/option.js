import React from 'react';
import Car from './car.js';

class Option extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({selected: e.target.value});

  }
  render(){
    return(
      <div>
        <h1>Choose Options</h1>
        <label for="new1"> New Only</label>
        <input type="checkbox" id="new1" name="newOnly"/>
        <br/>
        <label for="carType"> Select Type</label>
        <select name="carType" id="cars" onChange={this.handleChange}>
          <option value="all">All</option> 
          <option value="cars">Cars</option>
          <option value="trucks">Trucks</option>
          <option value="convertibles">Convertibles</option>
        </select>
        <Car selected={this.state.selected} />
      </div>
    )
  }
}

export default Option;