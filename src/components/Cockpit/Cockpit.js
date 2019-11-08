import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect'); 
        return () => {
            console.log('cleanup cleanup cleanup!!!');
        }
    }, []); 

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect'); 
        return () => {
            console.log('cleanup cleanup 2nd cleanup!!!');
        }
    }); 

    let btnClass = '';

    if(props.showPersons) {
        btnClass = styles.Red;
    }
    const classes = [];
    if(props.personsLength <= 2) {
      classes.push(styles.red);
    }
    if(props.personsLength <= 1) {
      classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit} >
            <h1>{props.title}</h1>
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

export default React.memo(Cockpit);