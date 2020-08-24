// Code ClickityClick Component Here
import React from 'react'

export class ClickityClick extends React.Component {

    
    constructor() {
        super();

        //define the initial state here
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        //update state here using this.setState
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    
    }


    render() {
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick
