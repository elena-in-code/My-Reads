import React from 'react';
//styles
import '../App.css';

class IndividualBook extends React.Component {

changeIndividualShelf = (event) => {
    event.preventDefault();
    this.props.onUpdate(event.target.value);
}

renderSelector() {
    console.log(this.props.book.shelf);
    return(
        <div className="book-shelf-changer">
            <select onChange={this.changeIndividualShelf} value={this.props.book.shelf}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

    render() {
        let currentImage = this.props.book.imageLinks ?
            this.props.book.imageLinks.thumbnail : '';
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${currentImage}")` 
                    }}>
                    </div>
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