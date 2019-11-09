import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';

// HOC
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        const { name, age, click, changed, children } = this.props;
        return (
            <Fragment>
                <p key="i1" onClick={click}> Hi, my name is {name} and I am {age} years old!</p>
                <p key="i2">{children}</p>
                <input key="i3" ref={this.inputElementRef} type="" onChange={changed} value={name} /> 
            </Fragment>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);