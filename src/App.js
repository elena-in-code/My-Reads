import React from 'react';
import { Route } from "react-router-dom";
//API
import * as BooksAPI from './BooksAPI';
//components
import HomePage from '../src/views/home_page/HomePage';
import SearchPage from '../src/views/search_page/SearchPage';
//styles
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
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
    })
  }

  UpdateShelfCollection = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.fetchShelfCollection();
    })
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
          books={this.state.books}
          onChange={this.UpdateShelfCollection}/>)}>
        </Route>
      </div>
    )
  }
}

export default App
