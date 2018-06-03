import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookTemplate from './BookTemplate';
import * as BooksAPI from './BooksAPI';

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
                        {Array.isArray(this.state.books) &&
                            this.state.books.map(book => (
                                <li key={book.id}>
                                    <BookTemplate book={book} />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
