// function Book(isbn, title, author, year) {
//     this.isbn = isbn;
//     this.title = title;
//     this.author = author;
//     this.year = Number(year);
// }
//
// Book.prototype.toString = function(){
//     return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
// }
//
// function Library() {
//     this.books = [];
//     this.isbns = new Set();
// }
//
// Library.prototype.addBook = function(book){
//     this.books.push(book);
// }
//
// Library.prototype.generateRandomBooks = function(count, minYear, maxYear) {
//     for(let i = 0; i < count; i++){
//         const isbn = this.generateUniqueISBN();
//         const authorNumber = getRandomInt(1, 30);
//         const author = `Author${authorNumber}`;
//         const titleNumber = getRandomInt(1, 100);
//         const title = `Title${titleNumber}`;
//         const year = getRandomInt(minYear, maxYear);
//         const book = new Book(isbn, title, author, year);
//         this.books.push(book);
//     }}
//
// Library.prototype.findByAuthor = function(author){
//     author = author.toLowerCase();
//     return this.books.filter(b => b.author.toLowerCase().includes(author));
// }
//
// Library.prototype.findByTitle = function(title){
//     title = title.toLowerCase();
//     return this.books.filter(b => b.title.toLowerCase().includes(title) );
// }
//
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// Library.prototype.generateUniqueISBN = function() {
//     let isbn;
//     do{
//         isbn = this.generateRandomISBN();
//     } while(this.isbns.has(isbn));
//     return isbn;
// }
//
// Library.prototype.generateRandomISBN = function() {
//     let isbn= "";
//     for(let i = 0; i < 10; i++) {
//         isbn += Math.floor(Math.random() * 10);
//     }
//     return isbn;
// }
//
// Library.prototype.printLibrary = function() {
//     console.log("Library");
//     for(let i = 0; i < this.books.length; i++){
//         console.log(this.books[i].toString());
//     }
// }