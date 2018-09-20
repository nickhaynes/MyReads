import React, { Component } from 'react';

class Book extends Component {

	render() {
		return (
/*			<div>
				<img>
				<span className="Title"></span>
				<span className="Author"></span>
			</div>*/
			<ul className="book-list">
				{this.props.books.map((book) => (
					<li className="book">
						<img src={book.coverImage} className="cover"/>
						<div className="title">{book.title}</div> 
						<div className="author">{book.author}</div>
					</li>
				))}
			</ul>
		)
	}
}

export default Book;