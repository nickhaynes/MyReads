import React from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {

	const {imageLinks, title, subtitle } = props.book;

	return (
		<div className="book">
			{ imageLinks !== undefined && (
				<img src={imageLinks.thumbnail} className="cover" alt={title}/>
			)}
			<ShelfChanger
				book = { props.book }
                books={ props.books }
                changeShelf={ props.changeShelf }
            />
			<div className="title">{title}</div>
			<div className="subtitle">{subtitle}</div> 
		</div>
	);
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	changeShelf: PropTypes.func.isRequired,
	shelfNames: PropTypes.array.isRequired
}

export default Book;