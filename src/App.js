import React from 'react';
import { Route } from "react-router-dom";
//components
import HomePage from '../src/views/home_page/HomePage';
import SearchPage from '../src/views/search_page/SearchPage';
//styles
import './App.css';
// import * as BooksAPI from './BooksAPI'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage/>)}>
        </Route>
        
        <Route path="/search" render={() => (
          <SearchPage/>)}>
        </Route>
      </div>
    )
  }
}

export default App
