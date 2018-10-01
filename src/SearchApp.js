import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import './App.css';

class SearchApp extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		shelfNames: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			books: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.emitChangeDebounce = debounce(this.findBooks, 100);
	}

	handleChange(evt) {
		this.emitChangeDebounce(evt.target.value);
	}

	findBooks = (searchTerms) => {
		this.setState({ searchText: searchTerms });

		if (searchTerms) {
			BooksAPI.search(searchTerms.trim())
			.then((books) => {
				if (books.length > 0) {
					const updatedBooks = this.updateShelf(books); 
					this.setState({ books: updatedBooks });
				} else {
					this.setState({ books: [] });
				}
			})
			.catch((e) => 
				console.log('Error during search: ', e));
		} else {
			this.setState({ books: [] });
		}
	}

	updateShelf = (books) => {
		return books.map(book => {
			let updatedBook = book;
			const bookIndex = this.props.myBooks.findIndex((myBook) => myBook.id === book.id);
			if (bookIndex !== -1) {
				updatedBook.shelf = this.props.myBooks[bookIndex].shelf;
			} else {
				updatedBook.shelf = 'none';
			}
			return updatedBook;
		});
	}


	render() {
		const { searchText, books } = this.state;
		const { shelfNames, changeShelf, switchShelf } = this.props;
		return (
			<div className="search-app">
				<div className="search-bar">
					<div className="back-button">
			          <Link to='/'>Go back to homescreen</Link> 
			        </div>
					<div className="search-input">
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={ searchText }
							onChange={ this.handleChange }
						/>
					</div>
				</div>
				<div className="search-results">
					{ searchText.length > 0 && (
						<div>
							<ol className="book-list">
								{shelfNames.map((shelf) => {
									const shelfDesc = shelf.id === 'none' ? 'New books...' : shelf.description;
									return (
										<BookShelf
											description={shelfDesc}
											books={books.filter(book => book.shelf === shelf.id)}
											changeShelf={changeShelf}
											switchShelf={switchShelf}
											shelfNames={shelfNames}
											key={shelf.id}
										/>
									);
								})}
							</ol>
						</div>
					)}				
				</div>
			</div>
		)
	}
}

export default SearchApp;