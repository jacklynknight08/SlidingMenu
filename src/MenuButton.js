import React, { Component } from 'react';
import './MenuButton.css';

// Define MenuButton and associate onMouseDown event with a prop
class MenuButton extends Component {
    render(){
        return(
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;