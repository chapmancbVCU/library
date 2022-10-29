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

// Test books
const bookZero = new Book("PHP & MySQL server-side web development",
                    "John Duckett", 668, false);
const bookOne = new Book("Foo", "Bar", 42, true);

myLibrary.push(bookZero);
myLibrary.push(bookOne);

for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
}


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

/******************************************************************************
 *        Name: addBooktoLibrary
 * Description: Function for adding a book to the library array.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
function addBookToLibrary() {

}

/**
 * This function returns a message depending on if the book has been read yet.
 * @param {boolean} readStatus The status of whether or not the book has
 * been read
 * @returns A string that contains the message "not read yet" if the user
 * has not read the book.  Otherwise the message is set to "has been read"
 */
function isReadMessage(readStatus) {
    if(readStatus === false) {
        return "not read yet";
    } else {
        return "has been read";
    }
}
