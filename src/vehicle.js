import React from 'react';

import Car from './Components/carTemplate.js';

export default class Vehicle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortCars: false,
      sortTrucks: false,
      sortConvertibles: false,
      sortNewAdd: false,
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
    else if (sortName === "newest addition"){
      this.setState({
        sortNewAdd: !(this.state.sortNewAdd),
      })
    }
  }
  render(){
    let carType = this.props.selected;
    let carList = this.props.data.car;
    let truckList = this.props.data.truck;
    let convertibleList = this.props.data.convertible;
    let newAdd = this.props.data.newAdd;

    if (this.props.newOnly){
      carList = (carList.filter(car => car.newCar === true));
      truckList = (truckList.filter(truck => truck.newCar === true));
      convertibleList = (convertibleList.filter(convertible => convertible.newCar === true));
      newAdd = (newAdd.filter(newAddCar => newAddCar.newCar === true));
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
    if (this.state.sortNewAdd){
      newAdd = newAdd.sort(function(a,b){
        return a.price - b.price;
      })
    }
    if (!(this.state.sortNewAdd)){
      newAdd = newAdd.sort(function(a,b){
        return b.price - a.price;
      })
    }
    console.log(this.props.data.newAdd);
    if(carType === 'all'){
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
          sortCars={this.state.sortTrucks} />
        <Car 
          car={convertibleList} 
          name="convertible" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortConvertibles}/>
        <Car 
          car={newAdd} 
          name="newest addition" 
          newOnly={this.props.newOnly} 
          handleBuyClick={this.props.handleBuyClick} 
          toggleSort={this.toggleSort} 
          sortCars={this.state.sortNewAdd}/>
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
          sortCars={this.state.sortTrucks} />
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
          sortCars={this.state.sortConvertibles}/>
      )
    }
    else{
      return null;
    }
  }
}