
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
}

// Library.prototype.findByAuthor = function(author){
//     author = author.toLowerCase();
//     return this.books.filter(b => b.author.toLowerCase().includes(author));
// }
//
// Library.prototype.findByTitle = function(title){
//     title = title.toLowerCase();
//     return this.books.filter(b => b.title.toLowerCase().includes(title) );
// }

Library.prototype.findByAuthorTitle = function(author, title){
    author = author.toLowerCase().trim();
    console.log(author);
    title = title.toLowerCase().trim();
    console.log(title);

    return this.books.filter(book => {
        // const res = (author === "" ? true : book.author.toLowerCase().includes(author)) &&
        // (title === "" ? true : book.title.toLowerCase().includes(title));
        //console.log(res);
        return (author === "" ? true : book.author.toLowerCase().includes(author)) &&
            (title === "" ? true : book.title.toLowerCase().includes(title));
    } );
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
        let author = faker.person.fullName();
        let title = faker.book.title();
        const book = new Book(isbn, title, author, year);
        this.books.push(book);
    }
}

const library  = new Library();

const createLibraryButton = document.querySelector("#createLibraryButton");
//const searchByAuthorButton = document.querySelector("#searchByAuthorButton");
//const searchByTitleButton = document.querySelector("#searchByTitleButton");
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

// searchByAuthorButton.addEventListener("click", function(){
//     findByAuthorByEvent();
// });

authorForSearch.addEventListener("keyup", function(event) {
    findByEvent();
});

titleForSearch.addEventListener("keyup", function(event) {
    findByEvent();
})

// let findByAuthorByEvent = function (){
//     searchRes.textContent = "";
//     titleForSearch.value = "";
//     searchRes.textContent = library.printLibrary(library.findByAuthor(authorForSearch.value, ""));
// };

let findByEvent = function (){
    searchRes.textContent = "";
    searchRes.textContent = library.printLibrary(library.findByAuthorTitle(authorForSearch.value, titleForSearch.value));

}

// searchByTitleButton.addEventListener("click", function(){
//     searchRes.textContent = "";
//     searchRes.textContent = library.printLibrary(library.findByTitle(titleForSearch.value));
// });









