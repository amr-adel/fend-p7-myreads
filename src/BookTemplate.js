import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';

import FallbackCover from './icons/book.png';

class BookTemplate extends Component {
    checkShelf(id, onShelf) {
        let bookOnShelf = onShelf.filter(book => book.id === id);
        return bookOnShelf.length > 0 ? bookOnShelf[0].shelf : 'none';
    }

    render() {
        return (
            <div className="col s12 m6 l3">
                <div className="card hoverable grey lighten-4 medium">
                    <div className="card-image">
                        <img src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : FallbackCover} alt={this.props.book.title} />
                        <span className="card-title flow-text col s12">{this.props.book.title}</span>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="blue-grey-text">
                                {this.props.book.authors
                                    ? this.props.book.authors.join(`, `)
                                    : 'Unknown'}
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="input-field col s12">
                            <select
                                className="browser-default"
                                defaultValue={
                                    this.props.book.shelf
                                        ? this.props.book.shelf
                                        : this.checkShelf(
                                            this.props.book.id,
                                            this.props.onShelf
                                        )
                                }
                                onChange={e =>
                                    this.props.moveBook(this.props.book, e.target.value)
                                }
                            >
                                <option value="header" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookTemplate;
