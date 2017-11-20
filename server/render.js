//import React from 'react';
const React = require('react');
const axios = require('axios');
import App from '../client/components/App';

const ReactDOMServer = require('react-dom/server');

export default () => {
  return axios.get('http://localhost:8080/api/books')
    .then(resp => {
        return {
          markup: ReactDOMServer.renderToString(<App initialData={resp.data} />),
          data: resp.data
        };
    });
};
