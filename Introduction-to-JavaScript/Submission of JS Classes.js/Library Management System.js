
// Q3: Library Management System

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    // Issue a book
    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    // Return a book
    returnBook() {
        if (!this.isIssued) {
            console.log(this.title + " was not issued.");
        } else {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        }
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "Smith", "102"),
    new Book("Data Structures", "Robert", "103")
];

// Display available books
function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(
            book.title + " | " + book.author + " | " + book.ISBN
        );
    });
}

// Issue book by ISBN
function issueBookByISBN(isbn) {
    const selectedBook = books.find(book => book.ISBN === isbn);

    if (selectedBook) {
        selectedBook.issueBook();
    } else {
        console.log("Book not found!");
    }
}

// Test the system
displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();
