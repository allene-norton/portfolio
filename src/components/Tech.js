import { Animated } from "react-animated-css";
import Scroll from './Scroll.js'

const Tech = (props) => {
    return (
        <div className="Tech" style={{ height: '100vh' }}>
            <Animated
                animationIn="pulse"
                animationInDuration={2000}
                animationInDelay={8000}
                animationOut="fadeOut"
                isVisible={true}>
                <h1>TECHNOLOGIES</h1>
            </Animated>
            <div>
                <table>
                    <colgroup>
                        <col style={{ width: '33%' }} />
                        <col style={{ width: '33%' }} />
                        <col style={{ width: '33%' }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>Front-End</th>
                            <th>Back-End</th>
                            <th>Design</th>
                        </tr>
                        {/* {body} */}
                        <tr>
                            <td>React</td>
                            <td>Node</td>
                            <td>Illustrator</td>
                        </tr>
                        <tr>
                            <td>Redux</td>
                            <td>Express</td>
                            <td>Photoshop</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Ruby on Rails</td>
                            <td>Dreamweaver</td>
                        </tr>
                        <tr>
                            <td>CSS3</td>
                            <td>PostgresQL</td>
                            <td>XD</td>
                        </tr>
                        <tr>
                            <td>Sass</td>
                            <td>Python</td>
                            <td>Premiere</td>
                        </tr>
                        <tr>
                            <td>Material UI</td>
                            <td>WebSockets</td>
                            <td>SVG</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='tech-scroll'>
                <Scroll />
            </div>
        </div>
    )
}

export default Tech