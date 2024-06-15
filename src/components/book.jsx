import React, { Component } from "react";
import { getBooks } from "../services/fakeBookService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import GenreList from "./genreList";
import { getGenres } from "../services/fakeGenreService";

class Books extends Component {
  state = {
    books: [],
    pageSize: 3,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    searchQuery: "", 
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ books: getBooks(), genres });
  }

  // onDelete = (book_id) => {
  //   const books = [...this.state.books].filter((book) => book_id !== book_id);
  //   this.setState({ books });
  // };



  handlePageClick = (pageId) => {
    this.setState({ currentPage: pageId });
  };

  onHandleGenreClick = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value, currentPage: 1 });
  };

  render() {
    
    const {
      books: allBooks,
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      searchQuery,
    } = this.state;

    const filteredBooks =
    (selectedGenre && selectedGenre._id
      ? allBooks.filter((m) => m.genre._id === selectedGenre._id)
      : allBooks
    ).filter(
      (book) =>
        book.Book.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.numberInStock.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedBooks = paginate(filteredBooks, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <GenreList
            genres={genres}
            onGenreClick={this.onHandleGenreClick}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col">
        
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleSearch}
          />
          <table className="table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Name</th>
                <th>Email</th>
                <th />
              </tr>
            </thead>
            {paginatedBooks.map((book) => (
              <tbody key={book._id}>
                <tr>
                  <td>{book.Book}</td>
                  <td>{book.genre.name}</td>
                  <td>{book.numberInStock}</td>
                 
                  {/* <td>
                    <button
                      onClick={() => this.onDelete(book._id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              </tbody>
            ))}
          </table>
          <Pagination
            pageInfo={{
              itemSize: filteredBooks.length,
              pageSize,
              onPageClick: this.handlePageClick,
              currentPage,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Books;
