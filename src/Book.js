import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = (props) => {

	const { books, changeShelf } = props.book;

	return (
		<div className="book">
			<img src={props.book.imageLinks.thumbnail} className="cover" alt="Cover of {props.book.title}"/>
			<ShelfChanger
                  books={ books }
                  changeShelf={ changeShelf }
            />
			<div className="title">{props.book.title}</div>
			<div className="subtitle">{props.book.subtitle}</div> 
		</div>
	);
}

export default Book;