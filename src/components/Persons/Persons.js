import React, { Component} from 'react';

// Components
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js] getSnapshotBeforeUpdate');
    //     return null;
    // }

    // componentDidUpdate() {
    //     console.log('[Persons.js] componentDidUpdate');
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, i) => {   
            return <Person 
                key={person.id}
                click={() => this.props.clicked(i)}
                name={person.name} 
                age={person.age} 
                changed={(e) => this.props.changed(e, person.id)}
                />
        });
    };
}

export default Persons;