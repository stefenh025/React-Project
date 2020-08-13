import React from 'react';

export default class Modal extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    if(this.props.show){
      return(
        <div className="modal">
          <div className="modal-header">
            <div className="modal-body">
              AAAAAAAAAAAAAAAAAAAAAAAAAA
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