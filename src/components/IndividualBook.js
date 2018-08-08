import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../App.css';

class IndividualBook extends React.Component {

change_bookShelf = (event) => {
    event.preventDefault();
    this.props.onUpdate(event.target.value)
}

renderSelector() {
    return(
        <div className="book-shelf-changer">
            <select onChange={this.change_bookShelf} value={this.props.book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

    render() {
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: this.props.book.imageLinks ? (`url(${this.props.book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`) 
                    }}></div>
                    {this.renderSelector()}
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
          ) 
    }
}

export default IndividualBook;