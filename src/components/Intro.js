import { Animated } from "react-animated-css";

function Intro() {
    return (
        <div className="Intro">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <h1>ALLENE</h1>
            </Animated>
        </div>
    );
}

export default Intro;