import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const { name, age, click, changed, children } = this.props;
        return (
        <div className={styles.Person}>
            <p onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
            <p>{children}</p>
            <input type="" onChange={changed} value={name} />
        </div>
        )
    }
};

export default Person;