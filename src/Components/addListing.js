import React from 'react';
import Modal from './modal.js';

class AddListing extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      show: false,
    }
    this.showModal = this.showModal.bind(this);
  }
  showModal(e){
    this.setState({
      show: true,
    });
  }
  render(){
    return(
      <div className="float-right">
        <button type="button" className="btn btn-dark" onClick={this.showModal}>
          Add Listing <span className="badge badge-light">+</span>
        </button>
        <Modal show={this.state.show}/>
      </div>
    )
  }
}

export default AddListing;