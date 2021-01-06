import { Animated } from "react-animated-css";
import React, { Component } from 'react'
import Typist from 'react-typist';


class Intro extends Component {
    state = {
        show: "none",
        showDesc: "none"
    }

    setShow = () => {
        setTimeout(() => { this.setState({ show: "inline" }) }, 2000)
    }
    setShowDesc = () => {
        setTimeout(() => { this.setState({ showDesc: "inline" }) }, 3000)
    }
    render() {
        return (
            <div className="Intro">
                <div className="firstname">
                    <Animated
                        animationIn="slideInDown"
                        // animationInDelay={2000}
                        animationInDuration={1000}
                        animationOut="fadeOut"
                        isVisible={true}>
                        <h1>ALLENE</h1>
                    </Animated>
                </div>
                {this.setShow()}
                <div className="lastname" style={{ display: this.state.show }}>
                    <Animated
                        animationIn="slideInDown"
                        animationInDuration={1000}
                        isVisible={true}>
                        <p>NORTON</p>
                    </Animated>
                    {this.setShowDesc()}
                    <div className="intro-desc" style={{ display: this.state.showDesc }}>
                        <Typist avgTypingDelay={35}>
                            <Typist.Delay ms={3500} />
                            Full stack developer focused on creating smooth applications with clean design.
                    </Typist>
                    </div>
                </div>

            </div>
        );
    }
}

export default Intro;