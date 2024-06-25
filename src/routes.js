const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler'); // Import all the handler functions from the handler.js file

const routes = [
  {
    method: 'POST', // Define the HTTP method for adding a new book
    path: '/books', // Define the endpoint path for adding a new book
    handler: addBookHandler, // Use the addBookHandler function to handle requests to this endpoint
  },
  {
    method: 'GET', // Define the HTTP method for retrieving all books
    path: '/books', // Define the endpoint path for retrieving all books
    handler: getAllBooksHandler, // Use the getAllBooksHandler function to handle requests to this endpoint
  },
  {
    method: 'GET', // Define the HTTP method for retrieving a specific book by its ID
    path: '/books/{bookId}', // Define the endpoint path for retrieving a book by its ID
    handler: getBookByIdHandler, // Use the getBookByIdHandler function to handle requests to this endpoint
  },
  {
    method: 'PUT', // Define the HTTP method for updating a specific book by its ID
    path: '/books/{bookId}', // Define the endpoint path for updating a book by its ID
    handler: editBookByIdHandler, // Use the editBookByIdHandler function to handle requests to this endpoint
  },
  {
    method: 'DELETE', // Define the HTTP method for deleting a specific book by its ID
    path: '/books/{bookId}', // Define the endpoint path for deleting a book by its ID
    handler: deleteBookByIdHandler, // Use the deleteBookByIdHandler function to handle requests to this endpoint
  },
];

module.exports = routes; // Export the routes array so it can be used in other parts of the application
