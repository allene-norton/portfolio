import React from 'react'

import ReactPageScroller from "react-page-scroller";
import Intro from '../components/Intro'
import About from '../components/About'
import Tech from '../components/Tech'

import "./home.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    };

    handleBeforePageChange = number => {
        console.log(number);
    };

    render() {

        return (
            <React.Fragment>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    // customPageNumber={this.state.currentPage}
                    animationTimer={400}
                    animationTimerBuffer={500}
                    renderAllPagesOnFirstRender={true}
                >
                    <Intro />
                    <About />
                    <Tech />
                </ReactPageScroller>
            </React.Fragment>
        );
    }
}
