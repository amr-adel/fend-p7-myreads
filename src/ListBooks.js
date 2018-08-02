import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookTemplate from './BookTemplate';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
    state = {
        allBooks: []
    };

    constructor(props) {
        super(props);
        this.moveBook = this.moveBook.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll().then(allBooks => this.setState({ allBooks }));
    }

    moveBook = (movedBook, shelf) => {
        const movedBookIndex = this.state.allBooks.indexOf(movedBook);
        const tempAllBooks = this.state.allBooks;
        tempAllBooks[movedBookIndex].shelf = shelf;
        this.setState({ allBooks: tempAllBooks });
        BooksAPI.update(movedBook, shelf);
    };

    render() {
        return (
            <div className="list-books">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper blue-grey">
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <a href="#" className="brand-logo"><span className="amber-text">i</span>Bookshelf</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="bookshelf">
                        <div className="row">
                            <h4 className="center blue-grey-text">Currently Reading</h4>
                        </div>
                        <ol className="row">
                            {this.state.allBooks
                                .filter(book => book.shelf === 'currentlyReading')
                                .map(book => (
                                    <li key={book.id}>
                                        <BookTemplate
                                            book={book}
                                            moveBook={this.moveBook}
                                        />
                                    </li>
                                ))}
                        </ol>
                    </div>
                    <div className="divider" />
                    <div className="bookshelf">
                        <div className="row">
                            <h4 className="center blue-grey-text">Want to Read</h4>
                        </div>
                        <ol className="row">
                            {this.state.allBooks
                                .filter(book => book.shelf === 'wantToRead')
                                .map(book => (
                                    <li key={book.id}>
                                        <BookTemplate
                                            book={book}
                                            moveBook={this.moveBook}
                                        />
                                    </li>
                                ))}
                        </ol>
                    </div>
                    <div className="divider" />
                    <div className="bookshelf">
                        <div className="row">
                            <h4 className="center blue-grey-text">Read</h4>
                        </div>
                        <ol className="row">
                            {this.state.allBooks
                                .filter(book => book.shelf === 'read')
                                .map(book => (
                                    <li key={book.id}>
                                        <BookTemplate
                                            book={book}
                                            moveBook={this.moveBook}
                                        />
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
                <Link to="/search" className="btn-floating btn-large waves-effect waves-light red accent-2 float-btn"><i className="material-icons">add</i></Link>
            </div>
        );
    }
}

export default ListBooks;
