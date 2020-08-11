import React from 'react';

import Car from './Components/carTemplate.js';
let data = require('./carObj.js');

export default class Vehicle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortCars: false,
      sortTrucks: false,
      sortConvertibles: false,
    }
    this.toggleSort = this.toggleSort.bind(this);
  }
  toggleSort(sortName){
    if (sortName === "car"){
      this.setState({
        sortCars: !(this.state.sortCars),
      });
    }
    else if (sortName === "truck"){
      this.setState({
        sortTrucks: !(this.state.sortTrucks),
      });
    }
    else if (sortName === "convertible"){
      this.setState({
        sortConvertibles: !(this.state.sortConvertibles),
      })
    }
  }
  render(){
    let carType = this.props.selected;
    //let carLen, truckLen, convertibleLen;
    let carList = data.car;
    let truckList = data.truck;
    let convertibleList = data.convertible;

    if (this.props.newOnly){
      carList = (carList.filter(car => car.newCar === true));
      truckList = (truckList.filter(truck => truck.newCar === true));
      convertibleList = (convertibleList.filter(truck => truck.newCar === true));
    }
    if (this.state.sortCars){
      carList = carList.sort(function(a,b){
        return a.price - b.price;
      })
    }
    if (!(this.state.sortCars)){
      carList = carList.sort(function(a,b){
        return b.price - a.price;
      })
    }
    if (this.state.sortTrucks){
      truckList = truckList.sort(function(a,b){
        return a.price - b.price;
      })
    }
    if (!(this.state.sortTrucks)){
      truckList = truckList.sort(function(a,b){
        return b.price - a.price;
      })
    }
    if (this.state.sortConvertibles){
      convertibleList = convertibleList.sort(function(a,b){
        return a.price - b.price;
      })
    }
    if (!(this.state.sortConvertibles)){
      convertibleList = convertibleList.sort(function(a,b){
        return b.price - a.price;
      })
    }
    if(carType === 'all'){
      // carLen = data.car.length;
      // truckLen = data.truck.length;
      // convertibleLen = data.convertible.length;
      return(
        <div>
        <Car 
          car={carList} 
          name="car" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortCars}/>
        <Car 
          car={truckList}
          name="truck" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortCars} />
        <Car 
          car={convertibleList} 
          name="convertible" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortCars}/>
        </div>
      )
    }
    else if (carType === 'cars'){
      return(
        <div>
          <Car 
            car={carList} 
            name="car" 
            newOnly={this.props.newOnly} 
            handleBuyClick={this.props.handleBuyClick} 
            toggleSort={this.toggleSort} 
            sortCars={this.state.sortCars}/>
        </div>
      )
    }    
    else if(carType === 'trucks'){
      return(
        <Car 
          car={truckList}
          name="truck" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortCars} />
      )
    }
    else if(carType === 'convertibles'){
      return(
        <Car 
          car={convertibleList} 
          name="convertible" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortCars}/>
      )
    }
    else{
      return null;
    }
  }
}