let myLibrary = [];

const tableBody = document.getElementById("table-body");
const formContainer = document.querySelector(".form-container");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => `${title}, by ${author}, ${pages} pages, ${read}`;
    }
}

document.querySelector('button').addEventListener("click", addBookToLibrary)

let inputTitle = document.getElementById("title")
let inputAuthor = document.getElementById("author")
let inputPages = document.getElementById("pages")
let inputRead = document.getElementById("read")


function addBookToLibrary() {
    let newBook = new Book(titleInput.value.trim(), authorInput.value.trim(), parseInt(pagesInput.value.trim()), readInput.value.trim());
    myLibrary.push(newBook);

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
    renderLibrary();
    return true;
}

function renderBook(book, index) {
    tableBody.insertAdjacentHTML("beforeend", "<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.pages + "</td><td><button onclick='toggleReadStatus(" + index + ")' class='" + (book.read == true ? "button-primary" : "") + "'>" + (book.read == true ? "Read" : "Currently reading") + "</span></td><td><button onclick='removeBook(" + index + ")'>Remove</button></td></tr>");
}

function renderLibrary() {
    tableBody.innerHTML = "";
    if (myLibrary.length !== 0) {
        myLibrary.forEach((book, index) => renderBook(book, index));
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
    tableBody.innerHTML = "";
    renderLibrary();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
    renderLibrary();
}

(function () {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("myLibrary") != null) {
            myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        }
        renderLibrary();
    }
})();