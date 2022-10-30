/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: October 28, 2022
 *  Description: Functions that support implementation of Library website.
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
/**
 * Array that contains Book objects
 * @type {Array<Book>}
 */
let myLibrary = [];
const container = document.querySelector('#container')


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
                    1442, false);
const bookSix = new Book("HTML & CSS: design and build websites",
                    "John Duckett", 490, true);
// Add bookss to myLibrary array
myLibrary.push(bookZero);
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);
myLibrary.push(bookFour);
myLibrary.push(bookFive);
myLibrary.push(bookSix);


/******************************************************************************
 * Function call upon page load
 *****************************************************************************/
displayCards();


/******************************************************************************
 * Event listeners
 *****************************************************************************/
// We listen for an event when the add book button is clicked.
document.getElementById('add-book-button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

// Listen for event when we close form.
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-book-record-button').addEventListener(
        'click', addBookToLibrary);
});

/**
 * Constructor for adding a book to the library.
 * @param {string} title The title of the book to be added to the library 
 * @param {string} author The author's name
 * @param {number} pages The number of pages in the book
 * @param {boolean} read A boolean value used to report if the bood has been
 * read
 */
function Book(title, author, pages, read) {
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
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${isReadMessage(this.read)}`;
    }
}

/**
 * This function will create a form where the user can input information about 
 * a book.  Then it will call the Book constructor and repaint the page so 
 * that the new book is listed in the website.
 */
function addBookToLibrary(ev) {
    ev.preventDefault();            // Stop form from submitting

    const bookToAdd = new Book(document.getElementById('title').value,
                        document.getElementById('author').value,
                        document.getElementById('number-of-pages').value,
                        isReadChecked());
    
    // For debugging
    console.log(bookToAdd.info());

    /* Add to libary, reset form, close form, and update webpage to show 
    new card. */
    myLibrary.push(bookToAdd);
    document.forms[0].reset();
    document.querySelector('.bg-modal').style.display = 'none';
    createCard(myLibrary[myLibrary.length - 1]);
}


/**
 * This function takes a book object and builds the information card.  This
 * information is then printed to the browser window.
 * @param {Book} book A book object whose variables will be used to populate
 * the information in a card that appears on the website.
 */
function createCard (book) {
    
    const card = document.createElement('div');
    card.classList.add('book-info');
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

    const isBookRead = document.createElement('p');
    isBookRead.classList.add('is-book-read');
    isBookRead.textContent = isReadMessage(book.read);
    card.appendChild(isBookRead);
    
    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    card.appendChild(cardButtons);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card-button');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.textContent = "Delete";
    cardButtons.appendChild(deleteButton);

    const changeReadStatus = document.createElement('button');
    changeReadStatus.classList.add('card-button');
    changeReadStatus.textContent = "Read";
    cardButtons.appendChild(changeReadStatus);
}

/**
 * This function takes the myLibrary array and builds all of the individual
 * information cards shown on the webpage.
 */
function displayCards() {
    for(let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i]);
    }
}

/**
 * Returns true if checkbox in form for adding book is checked.  False 
 * otherwise.
 * @returns A boolean value depending of if the checkbox is checked
 * or not as stated in function's description.
 */
function isReadChecked() {
    if(document.getElementById('read').checked) {
        return true;
    }
    else {
        return false;
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
function isReadMessage(readStatus) {
    if(readStatus === false) {
        return "This book has not been read yet.";
    } else {
        return "This book has been read";
    }
}
