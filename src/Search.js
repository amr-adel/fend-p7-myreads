import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import FallbackCover from './icons/book.png';

class Search extends Component {
    state = {
        books: []
    };

    searchBooks(keyword) {
        BooksAPI.search(keyword).then(books => {
            this.setState({ books });
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={event =>
                                this.searchBooks(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books &&
                            this.state.books.map(book => (
                                <li key={book.id}>
                                    {book.shelf}
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundSize: 'cover',
                                                    backgroundImage: `url(${
                                                        book.imageLinks
                                                            ? book.imageLinks
                                                                  .thumbnail
                                                            : FallbackCover
                                                    })`
                                                }}
                                            />
                                            <div className="book-shelf-changer">
                                                <select
                                                    onChange={e =>
                                                        BooksAPI.update(
                                                            book,
                                                            e.target.value
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
                                                        Currently Reading
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
                                            {book.title}
                                        </div>
                                        <div className="book-authors">
                                            {book.authors
                                                ? book.authors.join(`, `)
                                                : 'Unknown'}
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
