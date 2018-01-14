import React, { Component } from 'react';
import MenuButton from './MenuButton';

class MenuContainer extends Component {
    constructor(props, context){
        super(props, context);

        // Storing a variable called 'visible' in the state object
        // Creating a toggleMenu method that will be responsible for toggling whether visible is true or false
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    // When this method is called, call toggleMenu that will toggle whether the menu appears or not
    handleMouseDown(m){
       this.toggleMenu();

       console.log("Clicked");
       m.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        });
    }

    // Instantiate MenuButton component 
    render() {
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>    
                    <div>
                        <p>List of Colors</p>
                        <ul>
                            <li>Red</li>
                            <li>Yellow</li>
                            <li>Blue</li>
                            <li>Orange</li>
                            <li>Green</li>
                            <li>Violet</li>
                            <li>Indigo</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default MenuContainer;