import React from 'react';

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

export default Option;