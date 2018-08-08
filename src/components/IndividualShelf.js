import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../App.css';
//components
import IndividualBook from './IndividualBook';

class IndividualShelf extends React.Component {

update_book = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
    }

    render() {
        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.ShelfName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                  .map((book, index) => 
                  (<IndividualBook 
                    book={book} 
                    key={index} 
                    onUpdate={(shelf) => {this.update_book(book, shelf)}}
                    />))}
                </ol>
              </div>
            </div>
          ) 
    }
}

export default IndividualShelf;