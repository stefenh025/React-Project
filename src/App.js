import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Vehicle from './vehicle.js';

export default class App extends React.Component{
  render(){
    return(
      <div class="container">
        <Header />
        <Vehicle />
      </div>
    )
  }
}

