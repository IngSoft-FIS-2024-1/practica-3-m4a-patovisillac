import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });

  it('throw an error when setting an empty name', () => {
    expect(() => myLibrary.setName('')).toThrow();
  });

  it('return the total number of words', () => {
    const book1 = myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const book2 = myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    book1.setWords(70000);
    book2.setWords(50001);
    expect(myLibrary.totalWords()).toBe(120001);
  });

  it('do not add if words is undefined', () => {
    const book1 = myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const book2 = myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    const book3 = myLibrary.addBook('Fundación', 'Isaac Asimov', 400);
    book1.setWords(70000);
    book2.setWords(50001);
    expect(book3.getWords()).toBeUndefined();
    expect(myLibrary.totalWords()).toBe(120001);
  });


});