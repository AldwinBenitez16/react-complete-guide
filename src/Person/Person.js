import React from 'react';
import './Person.css';

// HOC
import Radium from 'radium';

const person = ({ name, age, click, changed, children }) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    };

    return (
    <div className="Person" style={style} >
        <p onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="" onChange={changed} value={name} />
    </div>
    )
};

export default Radium(person);