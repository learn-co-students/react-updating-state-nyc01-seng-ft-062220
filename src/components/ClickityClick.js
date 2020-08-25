// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
constructor () {  //initializes
    super(); //allows you to use 'this' in constructor

    //define initial state so we can define the new state
    this.state = {
        hasBeenClicked: false
    }
    // console.log(this.state)
}  

handleClick = () => {
    this.setState(previousState => {
        return {
            hasBeenClicked: !previousState.hasBeenClicked
        }
    })
};
//upon click, change state to 'true'
//setState will change the previous state, returning the new value of hasBeenClicked to the opposite of its previous value

//other option - we can pass a callback as a second argument (be careful of syntax!) to invoke the new state , () => console.log(this.state.hasBeenClicked))


render(){
    console.log(this.state.hasBeenClicked)
    return(
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick = {this.handleClick}>click me</button>
        </div>
        )
    }
}

//p tag - if button has been clicked, it will refer to the state defined earlier - if true, then nothing will appear, if not, then return 'not' will be inserted.
//button - if clicked, clickhandle will be triggered


export default ClickityClick