import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchApp extends Component {

	static PropTypes = {
		shelfNames: PropTypes.array.isRequired,
		changeShelfName: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchResults: [],
		books: [],
		searchError: false
	}

	findBooks = (event) => {
		const query = event.target.value.trim()
		this.setState({ query: query })

		if (query) {
			BooksAPI.search(query, 20).then((books) => {
				books.length > 0 ? this.setState({searchResults: books, searchError: false }) : this.setState({ searchResults: [], searchError: true })
				console.log(books);
				console.log(query);
				console.log(this.state.searchError);
			})
		} else
			this.setState({ searchResults: [], searchError: false })
	}


	render() {
		const { query, searchResults, books, searchError } = this.state;
		const { shelfNames } = this.props;
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
							value={ query }
							onChange={ this.findBooks }
						/>
					</div>
				</div>
				<div className="search-results">
					{ searchResults.length > 0 && (
						<div>
							<div className="results-header">
								<h3>Search returned { searchResults.length } books</h3>
							</div>
							<ol className="book-list">
								{searchResults.map((book) => (
									<li>
										<Book 
											book={ book } 
											books={ books }
											shelfNames={ shelfNames } 
											key={ book.id }
										/>
									</li>
								))}
							</ol>
						</div>
					)}
					{ searchError && (
						<div>
							<div className=''>
								<h3>Search returned no books.  Please try again.</h3>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default SearchApp;