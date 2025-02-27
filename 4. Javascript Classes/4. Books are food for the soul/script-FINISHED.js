class LibrarySection {
  constructor() {
    this._books;
  }

  search(type, term) {
    return this[type].filter((book) => {
      return book.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  get all() {
    return this._books;
  }

  get available() {
    return this._books.filter((book) => {
      return book.inStock >= book.borrowed;
    });
  }

  get borrowed() {
    return this._books.filter((book) => {
      return book.borrowed && book.borrowed >= book.returned;
    });
  }
}

class FantasySection extends LibrarySection {
  constructor() {
    super();

    this._books = [
      {
        title: "Another Book",
        author: "Raymond E. Feist",
        ISBN: 4029,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4030,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4031,
        inStock: 18,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 20,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
    ];
  }
}

class App {
  constructor() {
    const fantasyBooks = new FantasySection();
    const state = {
      books: fantasyBooks.all,
    };

    document.querySelectorAll(".nav-selection").forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.state.books = fantasyBooks[type];
      });
    });

    this.state = new Proxy(state, {
      set: this.update,
    });

<<<<<<< HEAD
  #initNavSelection() {
    const navItems = document.querySelectorAll(".nav-selection");
    navItems.forEach((i) =>
      i.addEventListener("click", this.#handlers.navSelection)
    );
=======
    this.bookList = new BookList(this.state);
>>>>>>> cee94f34bbf789a02be1acfc11e329b6490d6bf0
  }

  update = (target, property, value) => {
    target[property] = value;
    if (property === "books") {
      this.bookList.render();
    }
    return true;
  };
}

class BookList {
  constructor(state) {
    this.state = state;
    this.booksContainer = document.querySelector(".books");
    for (let book of state.books) {
      const bookInstance = new Book(book);
      this.booksContainer.appendChild(bookInstance.el);
    }
  }

<<<<<<< HEAD
    collectBooks.forEach((button) =>
      button.addEventListener("click", console.log)
    );
    returnBooks.forEach((button) =>
      button.addEventListener("click", console.log)
    );
=======
  render() {
    this.booksContainer.innerHTML = "";
    for (let book of this.state.books) {
      const bookInstance = new Book(book);
      this.booksContainer.appendChild(bookInstance.el);
    }
>>>>>>> cee94f34bbf789a02be1acfc11e329b6490d6bf0
  }
}

class Book {
  constructor(book) {
    this.book = book;
  }

  get el() {
    return this.#htmlToElement(this.#bookCard(this.book));
  }

  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  #bookCard(book) {
    return `
<<<<<<< HEAD
    <article class="book">
      <img src="${book.cover}" />
      <section>
        <h3>${book.title}</h3>
        <h5>${book.author}</h5>
        <p>${book.desc}</p>
        <section>
          <p>In Stock: <b>${book.inStock}</b></p>
          <button class="collect" data-id="${book.ISBN}">Collect</button>
          <button class="return" data-id="${book.ISBN}">Return</button>
        </section>
      </section>
    </article>
    `;
  }
}

class App {
  #name;
  #input;
  #ui;
  #fantasySection;
  lookingAtBooks = "all";

  constructor() {
    this.name = "Book App";
    this.#ui = new UI(this);
    this.#fantasySection = new FantasySection(this);
    this.#input = new InputHandler({
      search: (e) => {
        const searchTerm = e.target.querySelector("[name=search]").value;
        this.#ui.clear(".books");
        const books = this.#fantasySection.search(
          this.lookingAtBooks,
          searchTerm
        );
        books.forEach((book) =>
          this.#ui.append(".books", this.#ui.bookCard(book))
        );
        this.#input.initBookHandlers();
      },
      navSelection: (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.lookingAtBooks = type;
        this.#ui.clear(".books");
        const books = this.#fantasySection[this.lookingAtBooks];
        books.forEach((book) =>
          this.#ui.append(".books", this.#ui.bookCard(book))
        );
        this.#input.initBookHandlers();
      },
    });
  }

  bootstrap() {
    const books = this.#fantasySection.all;
    books.forEach((book) => this.#ui.append(".books", this.#ui.bookCard(book)));
    this.#input.initBookHandlers();
=======
        <article class="book">
          <img src="${book.cover}" />
          <section>
            <h3>${book.title}</h3>
            <h5>${book.author}</h5>
            <p>${book.desc}</p>
            <section>
              <p>In Stock: <b>${book.inStock}</b></p>
              <button class="collect" data-id="${book.ISBN}">Collect</button>
              <button class="return" data-id="${book.ISBN}">Return</button>
            </section>
          </section>
        </article>
        `;
>>>>>>> cee94f34bbf789a02be1acfc11e329b6490d6bf0
  }
}

const app = new App();
