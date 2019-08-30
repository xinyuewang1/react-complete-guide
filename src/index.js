import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Typically you only render one component, and everything else
// nested inside.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
