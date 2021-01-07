import { Animated } from "react-animated-css";
import React, { Component } from 'react'
import Typist from 'react-typist';


class Intro extends Component {
    // state = {
    //     show: "none",
    //     showDesc: "none"
    // }

    // setShow = () => {
    //     setTimeout(() => { this.setState({ show: "inline" }) }, 2000)
    //     clearTimeout()
    // }
    // setShowDesc = () => {
    //     setTimeout(() => { this.setState({ showDesc: "inline" }) }, 3000)
    //     clearTimeout()
    // }
    render() {
        return (
            <div className="Intro">
                <div className="firstname">
                    <Animated
                        animationIn="slideInDown"
                        animationInDuration={1000}
                        animationOut="fadeOut"
                        isVisible={true}>
                        <h1>ALLENE</h1>
                    </Animated>
                </div>
                {/* {this.setShow()} */}
                <div >
                    <Animated
                        className="lastname"
                        animationIn="slideInLeft"
                        animationInDelay={1000}
                        animationInDuration={1000}
                        isVisible={true}>
                        <p>NORTON</p>
                    </Animated>
                    {/* {this.setShowDesc()} */}
                    <div className="intro-desc">
                        <Typist avgTypingDelay={30}>
                            <Typist.Delay ms={3000} />
                            Full stack developer focused on creating smooth applications with clean design.
                    </Typist>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;

// style={{ display: this.state.showDesc }}