import React from 'react';
import { Link } from 'react-router-dom';
//API
import * as BooksAPI from '../../BooksAPI';
//styles
import '../../App.css';
//components
import IndividualBook from '../../components/IndividualBook';

class SearchPage extends React.Component {
    constructor(){
        super();
        this.state = {
            BooksResults: [], 
            userQuery: ''
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    updateIndividualBook = (book, shelf) => {
        this.props.onChange(book, shelf);
        book.shelf = shelf;
    }

    onSearch = (queryValue) => {
        if(queryValue.length !== 0) {
            BooksAPI.search(queryValue).then((books) => {
                if (books.length > 0) {
                    books = this.newShelf( books );
                    this.setState({ BooksResults : books})
                } else {
                    this.setState({ BooksResults: [] });
                    console.log('Sorry, this term is not in our data base');
                }
            })
        }
    }

    newShelf = ( books ) => {
        let myBooks = this.props.books;
        books.forEach( book => {
            book.shelf = 'none'
            myBooks.forEach( myBook => {
                if( book.id === myBook.id ) {
                    book.shelf = myBook.shelf
                }
            })
        })
        return books
    }

    handleEvent = (e) => {
        let value = e.target.value;
        this.setState(() => {
            return {userQuery:value}
        })
        this.onSearch(value);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"></Link>
                    <div className="search-books-input-wrapper">
                       
                        <input type="text" 
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.userQuery}
                        onChange={ this.handleEvent }/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.userQuery.length > 0 && this.state.BooksResults.map((book, key) => (
                        <IndividualBook
                        onChange={this.props.onChange}
                        onUpdate={(shelf) => {this.updateIndividualBook(book, shelf)}}
                        key={key}
                        book={book}
                        />)
                    )}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchPage;