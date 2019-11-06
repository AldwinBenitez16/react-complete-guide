import React, { Component } from 'react';

class Validation extends Component {
    render() {

        let text = <p>Length long ENOUGHT!</p>;
        if(this.props.textLen < this.props.min) {
            text = <p>Text is TOO SHORT!</p>;
        } 

        return (
            <div>
                {text}
            </div>
        );
    }
};

export default Validation;
