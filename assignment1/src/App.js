import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';


class App extends Component {
  state={
    user:[
      {name:'Pratiksha', age:22},
      {name:'bikash', age:22}
    ],
    showDetails:false
  };

  userInputHandler=(event)=>{
    this.setState({
      user:[
        {name:event.target.value, age:22}
      ]
    });
    
  };
  showUserNameHandler=() =>{
    const doesShow=this.state.showDetails;
    this.setState({
    showDetails: !doesShow
    });
  }


  render() {
    let persons=null;
    if(this.state.showDetails){
      persons=(
        <div>
        <UserInput changed={this.userInputHandler}
        currentName={this.state.user[0].name}/>
        <UserOutput userName={this.state.user[0].name}/>
        <UserOutput/>
        <UserOutput/>
        </div> 
      );
    };
  
    return (
      <div className="App">
      <button onClick={this.showUserNameHandler}>Switch Name</button>
      {persons}
      </div>
    );
  }
}

export default App;
