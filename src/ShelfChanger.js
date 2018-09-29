import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {

	static PropTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}

	state = {
		currentShelf: this.props.book.shelf,
	}

	switchShelf = (event) => {
		this.props.changeShelf(this.props.book, event.target.value);
		this.setState({
			currentShelf: event.target.value,
		});
	};

	render () {
		return (
			<div className='shelf-changer'>
				<select 
					value={this.state.currentShelf}
					onChange={(event) => this.switchShelf(event)}
				>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Have Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger;