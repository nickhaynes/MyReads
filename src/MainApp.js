import React from 'react';
import { Route, Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import './App.css';

const MainApp = (props) => {
	const { books, shelfNames, changeShelf } = props;
	return (
		<div className="App">		
			<header className="App-header">
		    	<h1 className="App-title">My Reads</h1>
		 	</header>
			<div className="main-display">
				{shelfNames.map((shelf) => {
					return (
						<Route key={shelf.id} exact path='/' render={() => (
							<BookShelf
								description={shelf.description}
								books={books.filter(book => book.shelf === shelf.id)}
								changeShelf={changeShelf}
								shelfNames={shelfNames}
							/>
						)}/>
					);
				})}
			</div>
			<div className="search-button">
	          <Link to='/search'>Search for new books</Link> 
	        </div>
		</div>		
	)
}

MainApp.propTypes = {
	books: PropTypes.array.isRequired,
	shelfNames: PropTypes.array.isRequired
}

export default MainApp;
