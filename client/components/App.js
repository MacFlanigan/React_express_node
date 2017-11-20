//import React from 'react';
const React = require('react');
import BookList from './BookList';
const axios = require('axios');

class App extends React.Component {
  state = { books: this.props.initialData };

  render() {
    debugger;
    return (
      <div>
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
