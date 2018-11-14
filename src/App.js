import React, { Component } from "react";
import PropTypes from 'prop-types';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    static propTypes = {
        children: PropTypes.element,
        child: PropTypes.element,
    };

    static defaultProps = {
        children: null,
        child: null,
    };

    render() {
        const { children, counter, tabs } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <div className="My-content">
                        {children}
                        {counter}
                        {tabs}
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
