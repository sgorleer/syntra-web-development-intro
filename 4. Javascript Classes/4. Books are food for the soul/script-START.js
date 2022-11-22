console.log("test");

class LibrarySection {
  constructor() {
    this._books;
  }

  get availableBooks() {
    return this._books.filter((book) => {
      return (
        book.inStock &&
        book.inStock >= book.reading &&
        book.inStock >= book.borrowed
      );
    });
  }

  get allBookedBooks() {
    return this._books.filter((book) => {
      return book.reading;
    });
  }

  get allBorrowedBooks() {
    return this._books.filter((book) => {
      return book.borrowed && book.borrowed >= book.returned;
    });
  }

  get allReturnedBooks() {
    // books originally borrowed
    return this._books.filter((book) => {
      return book.returned;
    });
  }
}
