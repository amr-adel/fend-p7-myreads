import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookTemplate from './BookTemplate';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        books: [],
        onShelf: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(onShelf => this.setState({ onShelf }));
    }

    searchBooks(keyword) {
        BooksAPI.search(keyword).then(books => {
            this.setState({ books });
        });
    }

    testShelf = (movedBook, shelf) => BooksAPI.update(movedBook, shelf);

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
                                    <BookTemplate
                                        book={book}
                                        onShelf={this.state.onShelf}
                                        test={this.testShelf}
                                    />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
