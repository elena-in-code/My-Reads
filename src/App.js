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
  constructor() {
    super();
    this.state = {
      books: [], 
      searchedBook: []
    }
  }

  componentDidMount() {
    this.fetchShelfCollection();
  }
  
  fetchShelfCollection() {
    BooksAPI.getAll()
    .then((books)=> {
      this.setState({
        books: books
      })
      //console.log(books.shelf);
      //console.log(books);
    })
  }

  UpdateShelfCollection = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.fetchShelfCollection();
    })
  }

  search = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchedBook) => {
        this.setState({ searchedBook })
      })
    } else {
      this.setState({ searchedBook: [] })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage
          books={this.state.books}
          onChange={this.UpdateShelfCollection}
          />)}>
        </Route>
        
        <Route path="/search" render={() => (
          <SearchPage
          books={this.state.searchedBook}
          onSearch={ this.search }
          onChange={this.UpdateShelfCollection}/>)}>
        </Route>
      </div>
    )
  }
}

export default App
