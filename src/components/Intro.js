import { Animated } from "react-animated-css";
import React, { Component } from 'react'
import Typist from 'react-typist';


class Intro extends Component {
    render() {
        return (
            <div className="Intro">
                <div className="firstname">
                    <Animated
                        animationIn="slideInDown"
                        animationInDuration={1000}
                        animationOut="fadeOut"
                        isVisible={true}>
                        <p>ALLENE</p>
                    </Animated>
                </div>
                {/* {this.setShow()} */}
                <div >
                    <Animated
                        className="lastname"
                        animationIn="slideInLeft"
                        animationInDelay={1000}
                        animationInDuration={1700}
                        isVisible={true}>
                        <p>NORTON</p>
                    </Animated>
                    {/* {this.setShowDesc()} */}
                    <div className="intro-desc">
                        <Animated
                            animationIn="fadeIn"
                            animationInDelay={1800}
                            animationInDuration={1000}
                            isVisible={true}>
                            <Typist
                                avgTypingDelay={50}
                                startDelay={3000}
                                cursor={{
                                    hideWhenDone: true,
                                    hideWhenDoneDelay: 5000
                                }}>
                                {/* <Typist.Delay ms={3000} /> */}
                            Full stack developer focused on creating smooth applications with clean design.
                    </Typist>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;

// style={{ display: this.state.showDesc }}