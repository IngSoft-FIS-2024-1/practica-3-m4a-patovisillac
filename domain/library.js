import Book from './book.js';

class Library {

  #name;
  #inventory = [];

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
    return newBook;
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let totalWords = 0;
    this.#inventory.forEach((book) => {
      if (book.getWords() != undefined) totalWords += book.getWords();
    });
    return totalWords;
  }
}

export default Library;
