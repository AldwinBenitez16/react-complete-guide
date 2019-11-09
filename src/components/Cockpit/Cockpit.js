import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';

// Context
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect'); 
        toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons
            </button>
            {<button onClick={authContext.login}>Log in</button>}
        </div>
    );
}

export default React.memo(Cockpit);