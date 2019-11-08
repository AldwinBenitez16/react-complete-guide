import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {

    let btnClass = '';

    if(props.showPersons) {
        btnClass = styles.Red;
    }
    const classes = [];
    if(props.persons.length <= 2) {
      classes.push(styles.red);
    }
    if(props.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit} >
            <h1>Hello, I'm a brand spanking new React App!</h1>
            <p className={classes.join(' ')} >This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

{/* <div>
{characters}
</div>
<input onChange={this.changeTextHandler} type='text' value={this.state.text} />
<Validation min={5} textLen={this.state.textNum} />
<p><em>Text Number: </em>{this.state.textNum}</p> */}

export default cockpit;