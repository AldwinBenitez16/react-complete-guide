import React from 'react';
import './Person.css';

const person = ({ name, age, click, changed, children }) => {
    return (
    <div className="Person" >
        <p onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="" onChange={changed} value={name} />
    </div>
    )
};

export default person;