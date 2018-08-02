import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookTemplate from './BookTemplate';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    state = {
        books: [],
        onShelf: []
    };

    constructor(props) {
        super(props);
        this.moveBook = this.moveBook.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll().then(onShelf => this.setState({ onShelf }));
    }

    searchBooks(keyword) {
        BooksAPI.search(keyword).then(books => {
            this.setState({ books });
        });
    }

    moveBook = (movedBook, shelf) => BooksAPI.update(movedBook, shelf);

    render() {
        return (
            <div className="search-books">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper blue-grey">
                            <div className="container">
                                <form>
                                    <div className="input-field">
                                        <input
                                            type="search"
                                            id="search"
                                            onChange={event =>
                                                this.searchBooks(event.target.value)
                                            }
                                        />
                                        <label htmlFor="search" className="label-icon"><i className="material-icons">search</i></label>
                                        <i className="material-icons">close</i>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <p className="center"><i className="material-icons small red-text text-accent-2">warning</i></p>
                                    <p className="center flow-text">The backend API uses a fixed set of cached search results and is limited to a particular set of search terms</p>
                                    <div className="divider"></div>
                                    <p className="center grey-text">'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="row">
                        {Array.isArray(this.state.books) &&
                            this.state.books.map(book => (
                                <li key={book.id}>
                                    <BookTemplate
                                        book={book}
                                        onShelf={this.state.onShelf}
                                        moveBook={this.moveBook}
                                    />
                                </li>
                            ))}
                    </ol>
                </div>
                <Link to="/" className="btn-floating btn-large waves-effect waves-light red accent-2 float-btn"><i className="material-icons">arrow_back</i></Link>
            </div>
        );
    }
}

export default Search;
