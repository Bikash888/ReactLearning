import React from "react";
import './person.css'

const person = (props) => {

    return (
    <div className='Person'>
    <p onClick={props.click}>my name is {props.name} & age is {props.age}</p>
    <p>{props.children}</p>
    <input type='text'onChange={props.changed}></input>
    </div>
    );



}
export default person;