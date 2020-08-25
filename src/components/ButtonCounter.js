import React from 'react'

class ButtonCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  clickHandler = () => {

    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }



  render() {
    return(

      <div>
        <p>{this.state.count}</p>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>

    )
  }


}

export default ButtonCounter
