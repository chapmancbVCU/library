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
            return `The ${this.title} by ${this.author}, ${this.pages} pages, ${isReadMessage(this.read)}`;
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