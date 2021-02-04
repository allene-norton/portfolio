import React, { Component } from 'react'
import ShowProject from './ShowProject'


class Projects extends Component {
    state = {
        project: 'resitown'
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({ project: e.target.value })
        console.log(this.state.project)
    }

    render() {
        return (
            <div className="Projects" style={{ height: '100vh' }}>
                <div className="project-bar">
                    <p>PROJECTS</p>
                    <ul>
                        <li><button className="project-btn" value="resitown" onClick={(e) => this.handleClick(e)}>ResiTown</button></li>
                        <li><button className="project-btn" value="viness" onClick={(e) => this.handleClick(e)}>Viness</button></li>
                        <li><button className="project-btn" value="playbase" onClick={(e) => this.handleClick(e)}>Playbase</button></li>
                        <li><button className="project-btn" value="crecipe" onClick={(e) => this.handleClick(e)}>Crecipe</button></li>
                        <li><button className="project-btn" value="journalwave" onClick={(e) => this.handleClick(e)}>Journalwave</button></li>
                    </ul>
                </div>
                <div className="project-disp">
                    <ShowProject project={this.state.project} />
                </div>
            </div>
        )
    }
}

export default Projects