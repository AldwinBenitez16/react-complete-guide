import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>This is a paragraph. My username is {props.username}</p>
            <p>This is another paragraph.</p>
        </div>
    );
}

export default userOutput;