import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import MainApp from './MainApp';
import SearchApp from './SearchApp';
import './App.css';

const shelfNames = [
  {
    "id": "currentlyReading",
    "description": "Currently Reading"
  },
  {
    "id": "wantToRead",
    "description": "Want to Read"
  },
  {
    "id": "read",
    "description": "Have Read"
  },
  {
    "id": "none",
    "description": "Other"
  }
]

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
    .catch((e) => {
      console.log("Error during componentDidMount: ", e);
    });
  }

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(() => {
      newBook.shelf=newShelf;
      this.setState((state) => (
        { books: state.books
            .filter( currentBook => currentBook.id !== newBook.id)
            .concat(newBook)
        }));
    });
  }

  render() {
    const books = this.state.books;
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <MainApp 
            books={books} 
            shelfNames={shelfNames} 
            changeShelf={ this.changeShelf }
          />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchApp 
            myBooks={books} 
            shelfNames={shelfNames} 
            changeShelf={this.changeShelf}
          />
        )}/>
        
      </div>
    );
  }
}

export default App;
