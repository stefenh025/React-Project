import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Header />
      </div>
    )
  }
}

