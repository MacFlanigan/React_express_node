//import React from 'react';
const React = require('react');
import BookList from './BookList';

class App extends React.Component {
  state = { answer: 42 };
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default App;
