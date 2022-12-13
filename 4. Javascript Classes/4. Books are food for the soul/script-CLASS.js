console.log("Books app");

class LibrarySection {
  constructor() {
    this.books = [];
  }

  search(term) {
    return this.books.filter((book) => book.title.toLowerCase().includes(term));
  }

  get all() {
    return this.books;
  }

  get available() {
    return this.books.filter((book) => book.inStock > 0);
  }

  get borrowed() {
    return this.books.filter((book) => book.borrowed > 0);
  }

  borrow(isbn) {
    const bookBorrowed = this.books.filter((book) => book.ISBN === isbn);
    bookBorrowed.borrowed += 1;
  }
}

class DramaSection extends LibrarySection {
  constructor() {
    super();
    this.books = [
      {
        title: "50 Shades of Grey",
        author: "Vertonghen",
        ISBN: 12345,
        inStock: 20,
        bookPlacement: "Drama/200/1",
        borrowed: 0,
        url: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a book about 50 shades of grey",
      },
      {
        title: "60 Shades of Grey",
        author: "Vertonghen",
        ISBN: 12345,
        inStock: 20,
        bookPlacement: "Drama/200/1",
        borrowed: 2,
        url: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a book about 50 shades of grey",
      },
      {
        title: "70 Shades of Grey",
        author: "Vertonghen",
        ISBN: 12345,
        inStock: 0,
        bookPlacement: "Drama/200/1",
        borrowed: 3,
        url: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a book about 50 shades of grey",
      },
    ];
  }
}

class Library {
  constructor() {
    // all books that are present in the app
    const dramaBooks = new DramaSection();
    const state = {
      books: dramaBooks.all,
    };

    document.querySelectorAll(".nav-selection").forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.state.books = dramaBooks[type];
        // we gebruiken hier de bracket notatie, omdat bij het gebruik van punt het niet dynamisch zou zijn! anders zou hij letterlijk zoeken naar type
      });
    });

    this.state = new Proxy(state, {
      set: this.update,
      // vanaf dat er iets wijzigt in object wil ik deze functie runnen.
    });
    this.bookList = new BookList(this.state);
  }

  update(prevState, property, value) {
    // update the state of the object
    prevState[property] = value;
    if (property === books) {
      this.bookList.render();
    }
  }
}

class BookList {
  // based on the state of the library we show books
  constructor(state) {
    // select the element in the DOM and append some books
    this.state = state;
    this.bookContainer = document.querySelector(".books");
    state.books.forEach((book) => {
      const bookInstance = new BookUI(book);
      this.bookContainer.appendChild(bookInstance.el);
    });
  }
  render() {
    this.bookContainer.innerHTML = "";
    this.state.books.forEach((book) => {
      const bookInstance = new BookUI(book);
      this.bookContainer.appendChild(bookInstance.el);
    });
  }
}

// responsible for bookl render in the app (HTML)
class BookUI {
  constructor(book) {
    this.book = book;
  }

  get el() {
    return this.#htmlToElement(this.#bookCard());
  }

  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  #bookCard() {
    return `<article class="book">
    <img src="${this.book.cover}"/>
    <section>
      <h3>${this.book.title}</h3>
      <h5>${this.book.author}</h5>
      <p>${this.book.desc}</p>
      <section>
      <p> In Stock: <b>${this.book.inStock}</b></p>
      </section>
    </section>
    </article>`;
  }
}

const app = new Library();
