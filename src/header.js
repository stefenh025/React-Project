import React from 'react';
import Welcome from './Components/welcome.js';
import Option from './Components/option.js';

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <Welcome />
        <Option />
      </div>
    )
  }
}