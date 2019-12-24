import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

/**
 * learning the basic of the react method like hook, setstate,passing argument
 *  and dyanmicality
 */
const app=() => {

  const [personState,setPersonState] =useState({
    persons:[
      {name:'Bikash', age:20},
      {name:'Pratiksha', age:19}
  ]
  });
  const [otherState,setOtherState]=useState('use other state')
 
 
  const nameChangehandler=(event)=>{
    setPersonState({
      persons:[
        {name:'Bikash', age:20},
        {name:event.target.value, age:19}
      ]
      })


  }
  const switchClickHandler=(newName) =>{
    
    setPersonState({
    persons:[
      {name:newName, age:20},
      {name:newName, age:19}
    ]
    })
    }
    // const buttonStyle={
    //   backgroundColor:'white',
    //   padding:'12px',
    //   border:'1px solid blue',
    //   color:'black',
    //   cursor:'pointer'
    // }
        return (
             <div className='App'>
                <h1>Hello I am React</h1>
                <button className='switch'
               
                onClick={switchClickHandler.bind(this,"sani")}>Change Name</button>
                <Person 
                click={switchClickHandler.bind(this,'Bikash')} 
                name={personState.persons[0].name} 
                age={personState.persons[0].age}
                >
                Coding and debugging is my passion</Person>
                <Person 
                 changed={nameChangehandler}
                 name={personState.persons[1].name} 
                 age={personState.persons[1].age}>
                </Person>
            </div> 
        );
   
}

export default app;

