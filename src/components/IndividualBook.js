import React from 'react';
//styles
import '../App.css';

class IndividualBook extends React.Component {

changeIndividualShelf = (event) => {
    event.preventDefault();
    this.props.onUpdate(event.target.value);
    alert(`The book "${this.props.book.title}" has been moved to "${this.props.book.shelf}" shelf successfully! 👍🏽`)
}

renderSelector() {
    return(
        <div className="book-shelf-changer">
            <select onChange={this.changeIndividualShelf} value={this.props.book.shelf}>
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
        console.log(this.props.key);
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: this.props.book.imageLinks.thumbnail ? 
                        (`url(${this.props.book.imageLinks.thumbnail})`) : 
                        (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`) 
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