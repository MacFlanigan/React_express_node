//import React from 'react';
const React = require('react');
import App from '../client/components/App';

const ReactDOMServer = require('react-dom/server');

export default () => {
    return ReactDOMServer.renderToString(<App />);
};

console.log(ReactDOMServer.renderToString(<App />));
