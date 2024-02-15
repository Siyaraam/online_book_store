// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Method to get book information
Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("-------------------------");
};

// Creating instances of Author and Book
var author1 = new Author("Author One", 1980, "Desi Country");
var author2 = new Author("Author Two", 1990, "Foreign Country");

var book1 = new Book("Book One", author1, "Fiction", 20.99);
var book2 = new Book("Book Two", author2, "Mystery", 15.50);
var book3 = new Book("Book Three", author1, "Science Fiction", 25.99);

// Displaying book details
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
