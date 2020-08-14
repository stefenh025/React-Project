import React from 'react';

export default class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      year: '',
      model: '',
      price: '',
      type: '',
      newCar: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMultiField = this.handleMultiField.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSubmit(e){
    let nYear = this.state.year;
    let nModel = this.state.model;
    let nPrice = this.state.price;
    let nType = this.state.type;
    let nNewCar = this.state.newCar;
    this.props.handleNewListing(nYear, nModel, nPrice, nType, nNewCar);
  }
  handleMultiField(e){
    let whichEntry = e.target.name;
    let whichValue = e.target.value;
    this.setState({
      [whichEntry] : whichValue,
    });
    console.log(this.state.newCar);
  }
  handleSelect(e){
    if (e.target.value === 'true'){
      this.setState({
        newCar: true,
      })
    }
    else if (e.target.value === 'false'){
      this.setState({
        newCar: false,
      })
    }
  }
  render(){
    if(this.props.show){
      return(
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Add Listing</h5>
              </div>

              <div className="modal-body">
                <form>
                <div className="form-group">
                  <label htmlFor="inputYear">Year:</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="inputYear" 
                      min="1900" 
                      max="2020" 
                      step="1" 
                      placeholder="Year only" 
                      name="year"
                      onChange={this.handleMultiField}>
                    </input>
                  <label htmlFor="inputModel">Model:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="inputModel" 
                      maxLength="1" 
                      placeholder="Letter only" 
                      name="model"
                      onChange={this.handleMultiField}>
                    </input>
                  <label htmlFor="inputPrice">Price:</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="inputPrice" 
                    placeholder="Numbers only" 
                    name="price"
                    onChange={this.handleMultiField}>
                    </input>
                  <label htmlFor="inputType">Type of Vehicle:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="inputType" 
                    placeholder="Car/Truck/Convertible" 
                    name="type"
                    onChange={this.handleMultiField}>
                    </input>
                  <label htmlFor="inputNew">Is it new?</label>
                  <select id="inputNew" className="form-control" name="newCar" onChange={this.handleSelect}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
                  <div className="float-right">
                  <button type="reset" onClick={this.props.showModal} className="btn btn-danger mx-1">Clear</button>
                  </div>
                </form>
                <button type="button" onClick={this.handleSubmit} className="btn btn-success mx-1">Save Changes</button>
              </div>
              {/* <div className="modal-footer">
              </div> */}
            </div>
          </div>
        </div>
      )
    }
    else{
      return null;
    }
  }
}