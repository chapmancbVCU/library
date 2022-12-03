/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: December 1, 2022
 *  Description: Functions that support implementation of Library website.
******************************************************************************/


/**
 * Class that describes the Book object.
 */
class Book {

    /**
     * Constructor for adding a book to the library.
     * @param {string} title The title of the book to be added to the library 
     * @param {string} author The author's name
     * @param {number} pages The number of pages in the book
     * @param {boolean} read A boolean value used to report if the bood has been
     * read
     */
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    
        /**
         * Function inside the Book constructor that prints a message containing 
         * information about a particular book.
         * @returns A string containing information about a book
         */
        this.info = function() {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isReadMessage(this.read)}`;
        }
    }

    

    /**
     * This function returns a message depending on if the book has been read yet.
     * @param {boolean} readStatus The status of whether or not the book has 
     * been read
     * @returns A string that contains the message "This book has not been read 
     * yet." if the user has not read the book.  Otherwise the message is set to 
     * "has been read"
     */
    isReadMessage(readStatus) {
        if(readStatus === false) {
            return "This book has not been read yet.";
        } else {
            return "This book has been read";
        }
    }
}

class Library {
    constructor() {
        this.onlineLibrary = [];
    }

    /**
     * This function takes a book object and builds the information card.  This 
     * information is then printed to the browser window.
     * @param {Book} book A book object whose variables will be used to populate 
     * the information in a card that appears on the website
     * @param {number} index The index of the book in the myLibrary array
     */
    createCard (book, index) {
        const card = document.createElement('div');
        card.classList.add('book-info');
        card.setAttribute('id', `${index}`);
        container.append(card);

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = book.title;
        card.appendChild(bookTitle);

        const border = document.createElement('hr');
        border.classList.add('card-border');
        card.appendChild(border);

        const authorName = document.createElement('p');
        authorName.classList.add('author-name');
        authorName.textContent = `By: ${book.author}`;
        card.appendChild(authorName);

        const numberOfPages = document.createElement('p');
        numberOfPages.classList.add('number-of-pages');
        numberOfPages.textContent = `Length: ${book.pages} pages`;
        card.appendChild(numberOfPages);

        const readStatus = document.createElement('p');
        readStatus.classList.add('is-book-read');
        readStatus.textContent = book.isReadMessage(book.read);
        card.appendChild(readStatus);
        
        const cardButtons = document.createElement('div');
        cardButtons.classList.add('card-buttons');
        card.appendChild(cardButtons);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('card-button');
        deleteButton.textContent = "Delete";
        cardButtons.appendChild(deleteButton);

        const changeReadStatus = document.createElement('button');
        changeReadStatus.classList.add('card-button');
        changeReadStatus.textContent = "Toggle Read";
        cardButtons.appendChild(changeReadStatus);

        // Each card needs an event listener for its delete button.
        deleteButton.addEventListener('click', () => {
            deleteCard(index, card);
        });

        // Each card needs an event listener for its read button.
        changeReadStatus.addEventListener('click', () => {
            updateReadStatus(index, readStatus);
        });
    }
    /**
     * This function takes the myLibrary array and builds all of the individual 
     * information cards shown on the webpage.
     */
    displayCards() {
        for(let i = 0; i < this.onlineLibrary.length; i++) {
            this.createCard(this.onlineLibrary[i], i);
        }
    }
}
/******************************************************************************
 * Test Books
 *****************************************************************************/
const bookZero = new Book("PHP & MySQL server-side web development",
"John Duckett", 668, false);
const bookOne = new Book("Foo", "Bar", 42, true);
const bookTwo = new Book("JavaScript: The Definitive Guide", 
                    "David Flanagan", 687, false);
const bookThree = new Book("Big Java: 2nd Edition",
                    "Cay Horstmann", 1216, true);
const bookFour = new Book("Discrete Mathematics with Applications: Third Edition",
                    "Susanna S. Epp", 775, true);
const bookFive = new Book("Physics for Scientists and Engineers with Modern Physics",
                    "Serway", 1442, false);
const bookSix = new Book("HTML & CSS: design and build websites",
                    "John Duckett", 490, true);

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
/**
 * Array that contains Book objects
 * @type {Array<Book>}
 */
let myLibrary = new Library();

myLibrary.onlineLibrary.push(bookZero);
myLibrary.onlineLibrary.push(bookOne);
myLibrary.onlineLibrary.push(bookTwo);
myLibrary.onlineLibrary.push(bookThree);
myLibrary.onlineLibrary.push(bookFour);
myLibrary.onlineLibrary.push(bookFive);
myLibrary.onlineLibrary.push(bookSix);

const container = document.querySelector('#container');

/******************************************************************************
 * Function call upon page load
 *****************************************************************************/
myLibrary.displayCards();