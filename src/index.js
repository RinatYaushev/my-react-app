import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Welcome, Hello, SuperHello } from './components/welcome'
import { Counter } from './components/counter'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App
        child={<Counter />}>
        <Welcome>
            <Hello />
            <SuperHello />
        </Welcome>
    </App>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
