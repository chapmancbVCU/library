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

    let report = "not read yet"
    if(this.read === true) {
        report = "has been read";
    }

    this.info = function() {
        console.log(`The ${this.title} by ${this.author}, ${this.pages} pages, ${report}`)
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
/******************************************************************************
 *        Name: 
 * Description: 
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/