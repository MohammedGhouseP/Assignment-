const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (
      !book ||
      typeof book.title !== 'string' || !book.title.trim() ||
      typeof book.author !== 'string' || !book.author.trim() ||
      typeof book.year !== 'number' || !Number.isInteger(book.year)
    ) {
      console.error("Book information is incomplete or incorrect.");
      return false;
    }

    const exists = this.books.some(b => b.title === book.title);
    if (exists) {
      console.error(`Book titled "${book.title}" already exists.`);
      return false;
    }

    this.books.push(book);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || null;
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    } else {
      console.error("Book not found.");
      return false;
    }
  }
};


console.log(library.addBook({ author: "George Orwell", year: 1949 })); 
console.log(library.addBook({ title: "1984", author: "George Orwell", year: 1949 })); 
console.log(library.addBook({ title: "1984", author: "George Orwell", year: 1949 })); 
console.log(library.books.length); 
console.log(library.removeBook("The Hobbit"));
console.log(library.books.length);
