import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import './App.css';

export default class App extends React.Component{
  render(){
    return(
      <div class="container-fluid px-0 bgColor">
        <Header />
      </div>
    )
  }
}

