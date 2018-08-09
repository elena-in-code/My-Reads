import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../../App.css';
//components
import IndividualBook from '../../components/IndividualBook';

class SearchPage extends React.Component {

updateIndividualBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
}

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"></Link>
                    <div className="search-books-input-wrapper">
                       
                        <input type="text" 
                        placeholder="Search by title or author"
                        onChange={ (e) => this.props.onSearch(e.target.value) }
                        type="text"
                        placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.props.books.map((book, key) => (
                        <IndividualBook
                        onChange={this.props.onChange}
                        onUpdate={(shelf) => {this.updateIndividualBook(book, shelf)}}
                        key={key}
                        />)
                    )}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchPage;