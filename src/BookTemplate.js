import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

import FallbackCover from './icons/book.png';


class BookTemplate extends Component {
    render () {
        return (
                <div className="book">
                {/* {this.props.book.shelf} */}
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundSize:
                                    'cover',
                                backgroundImage: `url(${
                                    this.props.book.imageLinks
                                        ? this.props.book
                                                .imageLinks
                                                .thumbnail
                                        : FallbackCover
                                })`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select
                                onChange={e =>
                                    BooksAPI.update(
                                        this.props.book,
                                        e.target
                                            .value
                                    )
                                }
                            >
                                <option
                                    value="none"
                                    disabled
                                >
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently
                                    Reading
                                </option>
                                <option value="wantToRead">
                                    Want to Read
                                </option>
                                <option value="read">
                                    Read
                                </option>
                                <option value="none">
                                    None
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">
                        {this.props.book.title}
                    </div>
                    <div className="book-authors">
                        {this.props.book.authors
                            ? this.props.book.authors.join(
                                    `, `
                                )
                            : 'Unknown'}
                    </div>
                </div>
        )
    }
}

export default BookTemplate;