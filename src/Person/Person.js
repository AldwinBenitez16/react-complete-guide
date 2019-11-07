import React from 'react';
import styles from './Person.module.css';

const person = ({ name, age, click, changed, children }) => {
    const rng = Math.random();
    if(rng > 0.7) {
        throw new Error('Something went wrong!');
    }

    return (
    <div className={styles.Person}>
        <p onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="" onChange={changed} value={name} />
    </div>
    )
};

export default person;