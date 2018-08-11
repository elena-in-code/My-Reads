import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../App.css';
//components
import IndividualBook from './IndividualBook';

class IndividualShelf extends React.Component {

updateIndividualBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
}

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.ShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
            .map((book, key) => (
            <IndividualBook 
              book={book} 
              key={key} 
              onUpdate={(shelf) => {this.updateIndividualBook(book, shelf)}}/>
            ))}
          </ol>
        </div>
      </div>
    ) 
  }
}

export default IndividualShelf;