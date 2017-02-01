import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    //remember! props needs to be passed in as an argument
    super()
    this.state = {
      secondsLeft: `${props.initialCount}`

    }
  }
  render(){
    ///THIS IS VALID! you can have if statements in your render function. better way would be to do a callback
    // if (this.state.secondsLeft > 0){
    // return(
    //   <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    //   )
    // }
    // else{
    //   return(
    //       <p>Boom!</p>
    //
    //   )
    boom(state).bind(this)
    }
  }
}

function boom(state){
  if (this.state.secondsLeft > 0){
    return(
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    )
  }
  else{
    return(
      <p>Boom!</p>
    }
  }

Bomb.defaultProps = {
  initialCount: 20
}
Bomb.propTypes = {
  initialCount: React.PropTypes.num
}

module.exports = Bomb
