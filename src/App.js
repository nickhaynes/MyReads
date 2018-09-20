import React, { Component } from 'react';
import BookStatus from './BookStatus';
import Book from './Book';
import logo from './logo.svg';
import './App.css';

const books = [
  {
    "id": "mockingbird",
    "title": "To Kill A Mockingbird",
    "author": "Harper Lee",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51t88XArQeL._SX330_BO1,204,203,200_.jpg",
    "status": "read"
  },
  {
    "id": "promise",
    "title": "Promise Me, Dad: A Year of Hope, Hardship, and Purpose",
    "author": "Joe Biden",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/41R6fZ0w0UL._SX329_BO1,204,203,200_.jpg",
    "status": "read"
  },
  {
    "id": "sawyer",
    "title": "The Adventures of Tom Sawyer",
    "author": "Mark Twain",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51qAZk60G%2BL._SX331_BO1,204,203,200_.jpg",
    "status": "read"
  },
  {
    "id": "umcbeliefs",
    "title": "United Methodist Beliefs: A Brief Introduction",
    "author": "William H. Willimon",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/31f-uBjqBOL._SX321_BO1,204,203,200_.jpg",
    "status": "read"
  },
  {
    "id": "wave",
    "title": "The Restless Wave: Good Times, Just Causes, Great Fights, and Other Appreciations",
    "author": "John McCain",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/514k5FSarXL._SX329_BO1,204,203,200_.jpg",
    "status": "willRead"
  },
  {
    "id": "england",
    "title": "A Short History of England: The Glorious Story of a Rowdy Nation",
    "author": "Simon Jenkins",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51vfn-RZTAL._SX324_BO1,204,203,200_.jpg",
    "status": "willRead"
  },
  {
    "id": "newnewdeal",
    "title": "The New New Deal: The Hidden Story of Change in the Obama Era",
    "author": "Michael Grunwald",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51xnYYwZi0L.jpg",
    "status": "willRead"
  },
  {
    "id": "unafraid",
    "title": "Unafraid: Living with Courage and Hope in Uncertain Times",
    "author": "Adam Hamilton",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/5176trogWQL._SX331_BO1,204,203,200_.jpg",
    "status": "willRead"
  },
  {
    "id": "finnish",
    "title": "Finnish Lessons: What Can the World Learn from Educational Change in Finland?",
    "author": "Pasi Sahlberg",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51X3vUSa1FL._SX356_BO1,204,203,200_.jpg",
    "status": "currentlyReading"
  },
  {
    "id": "phoenix",
    "title": "Harry Potter and the Order of the Phoenix",
    "author": "J.K. Rowling",
    "coverImage": "https://vignette.wikia.nocookie.net/harrypotter/images/3/31/Order_of_the_Phoenix_New_Cover.jpg/revision/latest?cb=20170109054726",
    "status": "currentlyReading"
  },
  {
    "id": "capital",
    "title": "Capital in the Twenty-First Century",
    "author": "Thomas Piketty",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/41OKpWydb-L._SX321_BO1,204,203,200_.jpg",
    "status": "currentlyReading"
  },
  {
    "id": "wildgrace",
    "title": "Wild Grace: What Happens When Grace Happens",
    "author": "Max Lucado",
    "coverImage": "https://images-na.ssl-images-amazon.com/images/I/51esA64goYL._SX327_BO1,204,203,200_.jpg",
    "status": "currentlyReading"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Reads</h1>
        </header>
        <Book books={books} />
      </div>
    );
  }
}

export default App;
