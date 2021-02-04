import { Animated } from "react-animated-css";
import React, { Component } from 'react'
import Typist from 'react-typist';
import Scroll from './Scroll.js'

class Intro extends Component {
    render() {
        return (
            <div className="Intro">
                <div className="firstname">
                    <Animated
                        animationIn="slideInDown"
                        animationInDuration={600}
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
                        animationInDelay={600}
                        animationInDuration={600}
                        isVisible={true}>
                        <p>NORTON</p>
                    </Animated>
                    {/* {this.setShowDesc()} */}
                    <div className="intro-desc">
                        <Animated
                            animationIn="fadeIn"
                            animationInDelay={1200}
                            animationInDuration={1000}
                            isVisible={true}>
                            <Typist
                                avgTypingDelay={35}
                                startDelay={2200}
                                cursor={{
                                    hideWhenDone: true,
                                    hideWhenDoneDelay: 5000
                                }}>
                                Full stack developer focused on creating smooth applications with clean design.
                            </Typist>
                        </Animated>
                    </div>
                    <div id='intro-scroll'>
                        <Scroll />
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;

// style={{ display: this.state.showDesc }}