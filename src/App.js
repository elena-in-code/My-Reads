import React from 'react';
import { Route } from "react-router-dom";
//components
import HomePage from '../src/views/home_page/HomePage';
import SearchPage from '../src/views/search_page/SearchPage';
//styles
import './App.css';
//API
import * as BooksAPI from './BooksAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchedBooks: []
    }
    this.fetchFullBookCollection = this.fetchFullBookCollection.bind(this);
  }

  componentDidMount() {
    this.fetchFullBookCollection();
  }

  fetchFullBookCollection() {
    BooksAPI.getAll()
    .then((books)=> {
      this.setState({
        books: books
      })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
    BooksAPI.update(book, shelf);
  }

  


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage
            changeShelf={this.changeShelf}
            books={this.state.books}
          />)}>
        </Route>
        
        <Route path="/search" render={() => (
          <SearchPage 
            changeShelf={this.changeShelf}
            books={this.state.books}
          />)}>
        </Route>
      </div>
    )
  }
}

export default App
