import React from 'react';
import { Link } from 'react-router-dom';
//components
import IndividualShelf from '../../components/IndividualShelf';
//styles
import '../../App.css';

class HomePage extends React.Component {
  
  render() {
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>📚 My Reads 📚</h1>
            </div>

            <div className="list-books-content">
              <div>
                <IndividualShelf 
                books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))} 
                ShelfName="Currently Reading" 
                onChangeShelf={this.props.onChange}/>

                <IndividualShelf 
                books={this.props.books.filter((book) => (book.shelf === "wantToRead"))} 
                ShelfName="Want to Read" 
                onChangeShelf={this.props.onChange}/>

                <IndividualShelf 
                books={this.props.books.filter((book) => (book.shelf === "read"))} 
                ShelfName="Read" 
                onChangeShelf={this.props.onChange}/>
              </div>
            </div>

            <div className="open-search">
                <Link to="/search">Search</Link>
            </div>
          </div>
        )
    }
}

export default HomePage;