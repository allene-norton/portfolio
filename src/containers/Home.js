import React from 'react'

import ReactPageScroller from "react-page-scroller";
import Intro from '../components/Intro'

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
                    customPageNumber={this.state.currentPage}
                >
                    <Intro />
                </ReactPageScroller>
            </React.Fragment>
        );
    }
}
