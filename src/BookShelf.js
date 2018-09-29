import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props) => {

	const { books, description, shelfNames, changeShelf } = props; 

	return (
		<div className="bookshelf-display">
			
			<div className="bookshelf-shelf">
				<h2 className="bookshelf-name">{description}</h2>
				{books.length === 0 ? (
					<p>There are no books currently with this status.  This shelf is empty.</p>
				) : (
					<ol className="book-list">
						{books.map((book) => (
							<li key={book.id}>
								<Book 
									book={book} 
									shelfNames={shelfNames} 
									changeShelf={changeShelf}
								/>
							</li>
						))}
					</ol>
				)}
			</div>
		</div>
	)
}

BookShelf.propTypes = {
	books: PropTypes.array.isRequired,
	shelfNames: PropTypes.string.isRequired,
	changeShelf: PropTypes.func.isRequired,
}
	

export default BookShelf;