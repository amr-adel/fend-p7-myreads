import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookTemplate from './BookTemplate';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
    state = {
        allBooks: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(allBooks => this.setState({ allBooks }));
    }

    testShelf = (movedBook, shelf) => {
        const movedBookIndex = this.state.allBooks.indexOf(movedBook);
        const tempAllBooks = this.state.allBooks;
        tempAllBooks[movedBookIndex].shelf = shelf;
        this.setState({ allBooks: tempAllBooks });
        BooksAPI.update(movedBook, shelf);
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">
                                Currently Reading
                            </h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.allBooks
                                        .filter(
                                            book =>
                                                book.shelf ===
                                                'currentlyReading'
                                        )
                                        .map(book => (
                                            <li key={book.id}>
                                                <BookTemplate
                                                    book={book}
                                                    test={this.testShelf}
                                                />
                                            </li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.allBooks
                                        .filter(
                                            book => book.shelf === 'wantToRead'
                                        )
                                        .map(book => (
                                            <li key={book.id}>
                                                <BookTemplate
                                                    book={book}
                                                    test={this.testShelf}
                                                />
                                            </li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.allBooks
                                        .filter(book => book.shelf === 'read')
                                        .map(book => (
                                            <li key={book.id}>
                                                <BookTemplate
                                                    book={book}
                                                    test={this.testShelf}
                                                />
                                            </li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;
