import { Animated } from "react-animated-css";
import resitown from '../Images/resitowndemogif.gif'
import viness from '../Images/vinessdemogif.gif'
import playbase from '../Images/playbasedemogif.gif'
import crecipe from '../Images/crecipedemogif.gif'
import journalwave from '../Images/journalwavedemogif.gif'






const ShowProject = (props) => {
    function defineGif() {
        if (props.project === 'resitown') {
            return resitown
        } else if (props.project === 'viness') {
            return viness
        } else if (props.project === 'playbase') {
            return playbase
        } else if (props.project === 'crecipe') {
            return crecipe
        } else if (props.project === 'journalwave') {
            return journalwave
        } else {
            return ''
        }
    }
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
                <img className="gif" src={defineGif()} />
                <p>
                    project description
            </p>
            </div>
        </div>
    )
}

export default ShowProject