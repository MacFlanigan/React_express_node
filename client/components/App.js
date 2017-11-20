//import React from 'react';
const React = require('react');
import BookList from './BookList';
const axios = require('axios');

class App extends React.Component {
  state = {
    books: this.props.initialData,
    ratings: {}
  };

  fetchRatingForBook = (bookId) => {
    axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
      .then(resp => {
        if (this.state.ratings[bookId]) {
          return;
        }
        this.setState((prevState) => {
          debugger;
          const currentRatings = prevState.ratings;
          currentRatings[bookId] = resp.data;
          return { ratings: currentRatings };
        });
      });
  };

  render() {
    //debugger;
    return (
      <div>
        <BookList books={this.state.books} onBookClick={this.fetchRatingForBook} />
      </div>
    );
  }
}

export default App;
