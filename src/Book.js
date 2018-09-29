import React from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {

	return (
		<div className="book">
			<img src={props.book.imageLinks.thumbnail} className="cover" alt={props.book.title}/>
			<ShelfChanger
				book = { props.book }
                books={ props.books }
                changeShelf={ props.changeShelf }
            />
			<div className="title">{props.book.title}</div>
			<div className="subtitle">{props.book.subtitle}</div> 
		</div>
	);
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	changeShelf: PropTypes.func.isRequired,
	shelfNames: PropTypes.array.isRequired
}

export default Book;