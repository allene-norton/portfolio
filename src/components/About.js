import { Animated } from "react-animated-css";
import Scroll from './Scroll.js'

const About = (props) => {
    return (
        <div className="About" style={{ height: '100vh' }}>
            <Animated
                animationIn="pulse"
                animationInDuration={2000}
                animationInDelay={8000}
                animationOut="fadeOut"
                isVisible={true}>
                <h1>ABOUT</h1>
            </Animated>
            <p>
                I am a full stack developer with a focus on design and user experience.
                As a graduate of Flatiron's software engineering bootcamp, I am well versed in
                React and Rails, and I am always focused on growing and adding to my knowledge and experience.
            </p>
            <p>
                Since graduating, I have worked on projects involving not only full stack development, but also
                DevOps, UI design, and graphic design.
            </p>
            <p>
                I am also an accomplished audio engineer and musician, as well as a mother to two adorable cats.
            </p>
            <div id='about-scroll'>
                <Scroll />
            </div>
        </div>
    )
}

export default About