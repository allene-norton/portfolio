import { Animated } from "react-animated-css";




const ShowProject = (props) => {
    return (
        <div className="show-project">
            <Animated
                animationIn="pulse"
                animationInDuration={2000}
                animationInDelay={8000}
                animationOut="fadeOut"
                isVisible={true}>
                <p>{props.project.toUpperCase()}</p>
            </Animated>
            <div className="project-desc">
                <p>
                    project description
            </p>
            </div>
        </div>
    )
}

export default ShowProject