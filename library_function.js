//import { faker } from 'https://esm.sh/@faker-js/faker';


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = Number(year);
}

Book.prototype.toString = function(){
    return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
}

function Library() {
    this.books = [];
   // this.isbns = new Set();
}

// Library.prototype.addBook = function(book){
//     this.books.push(book);
// }

// Library.prototype.generateRandomBooks = function(count, minYear, maxYear) {
//     for(let i = 0; i < count; i++){
//     const isbn = this.generateUniqueISBN();
//     const authorNumber = getRandomInt(1, 30);
//     const author = `Author${authorNumber}`;
//     const titleNumber = getRandomInt(1, 100);
//     const title = `Title${titleNumber}`;
//     const year = getRandomInt(minYear, maxYear);
//     const book = new Book(isbn, title, author, year);
//     this.books.push(book);
// }}

Library.prototype.findByAuthor = function(author){
    author = author.toLowerCase();
    return this.books.filter(b => b.author.toLowerCase().includes(author));
}

Library.prototype.findByTitle = function(title){
    title = title.toLowerCase();
    return this.books.filter(b => b.title.toLowerCase().includes(title) );
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Library.prototype.generateUniqueISBN = function() {
//         let isbn;
//         do{
//             isbn = this.generateRandomISBN();
//         } while(this.isbns.has(isbn));
//         return isbn;
//     }
//
// Library.prototype.generateRandomISBN = function() {
//         let isbn= "";
//         for(let i = 0; i < 10; i++) {
//             isbn += Math.floor(Math.random() * 10);
//         }
//         return isbn;
//     }

Library.prototype.printLibrary = function(arrBooks) {
    let strBooks = "";
        for(let i = 0; i < arrBooks.length; i++){
            strBooks += arrBooks[i].toString() +"\n";
        }
        return strBooks;
    }

Library.prototype.generateRandomBooks2 = function (count, minYear, maxYear) {
    for(let i = 0; i < count; i++){
        let isbn = faker.commerce.isbn()
        let year = getRandomInt(minYear, maxYear);
        let author = faker.book.author();
        let title = faker.book.title();
        const book = new Book(isbn, title, author, year);
        this.books.push(book);
    }
}

const library  = new Library();

const createLibraryButton = document.querySelector("#createLibraryButton");
const searchByAuthorButton = document.querySelector("#searchByAuthorButton");
const searchByTitleButton = document.querySelector("#searchByTitleButton");
const numBooks = document.querySelector("#inNumBooks");
const minYear = document.querySelector("#minYear");
const maxYear = document.querySelector("#maxYear");
const authorForSearch = document.querySelector("#inputSearchByAuthor");
const titleForSearch = document.querySelector("#inputSearchByTitle");
const searchRes = document.querySelector("#searchResult");


createLibraryButton.addEventListener("click", function(){
    const min = Number(minYear.value);
    library.generateRandomBooks2(numBooks.value, min, maxYear.value);
    searchRes.textContent = library.printLibrary(library.books);

});

searchByAuthorButton.addEventListener("click", function(){
    findByAuthorByEvent();
});

authorForSearch.addEventListener("keyup", function(event) {
    findByAuthorByEvent()
})

let findByAuthorByEvent = function (){
    searchRes.textContent = "";
    titleForSearch.value = "";
    searchRes.textContent = library.printLibrary(library.findByAuthor(authorForSearch.value));
};

searchByTitleButton.addEventListener("click", function(){
    searchRes.textContent = "";
    searchRes.textContent = library.printLibrary(library.findByTitle(titleForSearch.value));
});









