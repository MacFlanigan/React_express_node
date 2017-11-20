//import React from 'react';
const React = require('react');
import Book from './Book';

const BookList = (props) => {
  return(
    <div>
      {props.books.map(book =>
        <Book {...book} key={book.id} />
      )}
    </div>
  );
}
export default BookList;
