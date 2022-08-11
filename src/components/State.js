import React, { Component } from 'react';
import './State.css'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handlerIncrement =()=>{
       this.setState({count:this.state.count+1})
    }
    handlerDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    const{count}= this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handlerIncrement} className="btn1" >+</button>
        <button onClick={this.handlerDecrement} className="btn2" disabled={count===0 ? true:false}>-</button>
      </div>
    )
  }
}

