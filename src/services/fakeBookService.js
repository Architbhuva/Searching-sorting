import * as genresAPI from "./fakeGenreService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    Book: "HARRY POTTER",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "John" },
    numberInStock: "john@gmail.com",
    dailyRentalRate: 2.5,
    
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    Book: "EAST OF EDEN",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "james" },
    numberInStock: "james@gmail.com",
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    Book: "VILE BODIES",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "jenny" },
    numberInStock: "jenny@gmail.com",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    Book: "NOLI ME TANGERE",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Alex" },
    numberInStock: "alex@gmail.com",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    Book: "A TIME TO KILL",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "sam" },
    numberInStock: "sam@gmail.com",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    Book: "BRAVE NEW WORLD",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "tony" },
    numberInStock: "tony@gmail.com",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    Book: "PALE FIRE",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "lam" },
    numberInStock: "lam@gmail.com",
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    Book: "MORTAL ENGINES",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "julie" },
    numberInStock: "julie@gmail.com",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    Book: "THE DARK TOWER",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "thomas" },
    numberInStock: "thomas@gmail.com",
    dailyRentalRate: 3.5
  }
];

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find(m => m._id === id);
}

export function saveBook(book) {
  let bookInDb = books.find(m => m._id === book._id) || {};
  bookInDb.name = nook.name;
  bookInDb.genre = genresAPI.genres.find(g => g._id === book.genreId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  let bookInDb = books.find(m => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
