import { Animated } from "react-animated-css";
import React, { Component } from 'react'

class Intro extends Component {
    state = {
        show: "none"
    }

    setShow = () => {
        setTimeout(() => { this.setState({ show: "inline" }) }, 2000)
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
                </div>
            </div>
        );
    }
}

export default Intro;