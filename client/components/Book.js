//import React from 'react';
const React = require('react');
const Book = (props) => {
  return (
    <div>
      <p>
        Author: {props.author}<br/>
        Title: {props.title}<br/>
        price: {props.price}
      </p>
    </div>
  );
};

export default Book;
