import React, { Component, Fragment } from 'react';
import styles from './Person.module.css';

// HOC
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const { name, age, click, changed, children } = this.props;
        return (
            <Fragment>
                <p key="i1" onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
                <p key="i2">{children}</p>
                <input key="i3" type="" onChange={changed} value={name} /> 
            </Fragment>
        );
    }
};

export default withClass(Person, styles.Person);