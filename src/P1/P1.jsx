import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import './P1.css';

class P1 extends Component {
  state = {
    left: 760,
    deg: -360,
    top: 0,
    textOneLeft: 760,
    textTwoLeft: 760
  }
  clickHandler() {
    let targetX = 0
    let deg = 0
    if (this.state.left === 0) {
      targetX = 760
    } else {
      targetX = 0
    }

    this.setState({
      left: targetX,
      deg
    })
  }
  textOneAnimate() {
    this.setState({
      textOneLeft:0
    })
  }
  textTwoAnimate() {
    this.setState({
      textTwoLeft:0
    })
  }

  componentDidMount() {
    this.clickHandler();
    this.textOneAnimate();
    this.textTwoAnimate();
  }

  render() {
    return (
      <div ID="P1">
        <Motion style={{ x: spring(this.state.left, presets.wobbly), deg: spring(this.state.deg, presets.wobbly) }} >
          {interpolatingStyle => {
            // debugger
            return (
              <p style={{ transform: `translateX(${interpolatingStyle.x}px) rotate(${interpolatingStyle.deg}deg)` }} className="coloLight">coloLight</p>
            )
          }}
        </Motion>
        <p className="instruction">joinourlsdjfljoaejfojsd;klafjowjeaoifoisahdo;fhkhwaueifhuidshihglskahfuhaweigsudiahvauih</p>
        <button className="white-btn">enter your email address</button>
        <div className="clear mb300">
          <div className="circle right"></div>
          <div className="circle right"></div>
          <div className="circle right"></div>
        </div>

        <Motion style={{ x: spring(this.state.textOneLeft, presets.wobbly) }} >
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{ transform: `translateX(${interpolatingStyle.x}px)` }} >
                <p className="instruction text-right">sldfjsjsd;fjlsdaljgdsagadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjl;gjlsjgl;jsd;fjlsdaljadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjsagadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjl;gjlsjgdaljgdsagadsgf</p>
              </div>
            )
          }}
        </Motion>
        <p className="coloLight">coloLight</p>
        <Motion style={{ x: spring(this.state.left, presets.wobbly), deg: spring(this.state.deg, presets.wobbly) }} >
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{ transform: `translateX(${interpolatingStyle.x}px) rotate(${interpolatingStyle.deg}deg)` }} className="hexagon"></div>
            )
          }}
        </Motion>
        
        <Motion style={{ x: spring(this.state.textTwoLeft, presets.wobbly) }} >
          {interpolatingStyle => {
            // debugger
            return (
              <div style={{ transform: `translateX(${interpolatingStyle.x}px)` }} className="pb300">
                <p className="instruction text-right">sldfjsjsd;fjlsdaljgdsagadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjl;gjlsjgl;jsd;fjlsdaljadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjsagadsgf</p>
                <p className="instruction text-right">sldfjsldjfl;sdjlfjl;gjlsjgdaljgdsagadsgf</p>
              </div>
            )
          }}
        </Motion>
      </div>
    );
  }
}

export default P1;
