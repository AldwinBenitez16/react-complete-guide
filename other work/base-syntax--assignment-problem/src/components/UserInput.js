import React from 'react';

const userInput = (props) => {
    return(
        <div>
            <h4>Insert Username</h4>
            <input onChange={props.changed} type='text' value={props.username} />
        </div>
    ); 
}

export default userInput;