<<<<<<< HEAD
const { nanoid } = require('nanoid'); // Import the nanoid library for generating unique IDs

const books = []; // Create an empty array to store book objects

const addBookHandler = (request, h) => {
  // Extract book details from the request payload (data sent by the client)
=======
const { nanoid } = require('nanoid');

const books = [];

const addBookHandler = (request, h) => {
>>>>>>> e5895b8 (Initial commit)
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

<<<<<<< HEAD
  // If the book name is not provided, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

<<<<<<< HEAD
  // If readPage is greater than pageCount, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

<<<<<<< HEAD
  // Generate a unique ID for the book
  const id = nanoid(16);
  // Get the current date and time for insertedAt and updatedAt fields
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  // Determine if the book is finished (readPage equals pageCount)
  const finished = pageCount === readPage;

  // Create a new book object with the provided details
=======
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

>>>>>>> e5895b8 (Initial commit)
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
  };

<<<<<<< HEAD
  // Add the new book to the books array
  books.push(newBook);

  // Return a success response with the new book's ID
=======
  books.push(newBook);

>>>>>>> e5895b8 (Initial commit)
  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  }).code(201);
};

const getAllBooksHandler = () => ({
<<<<<<< HEAD
  // Return a success response with a list of all books (only id, name, and publisher)
=======
>>>>>>> e5895b8 (Initial commit)
  status: 'success',
  data: {
    books: books.map(({ id, name, publisher }) => ({
      id, name, publisher,
    })),
  },
});

const getBookByIdHandler = (request, h) => {
<<<<<<< HEAD
  // Extract the bookId from the request parameters
  const { bookId } = request.params;
  // Find the book with the matching ID
  const book = books.find((b) => b.id === bookId);

  // If the book is found, return it in a success response
=======
  const { bookId } = request.params;
  const book = books.find((b) => b.id === bookId);

>>>>>>> e5895b8 (Initial commit)
  if (book) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

<<<<<<< HEAD
  // If the book is not found, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

const editBookByIdHandler = (request, h) => {
<<<<<<< HEAD
  // Extract the bookId from the request parameters
  const { bookId } = request.params;
  // Extract the updated book details from the request payload
=======
  const { bookId } = request.params;
>>>>>>> e5895b8 (Initial commit)
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

<<<<<<< HEAD
  // If the book name is not provided, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

<<<<<<< HEAD
  // If readPage is greater than pageCount, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

<<<<<<< HEAD
  // Find the index of the book with the matching ID
  const index = books.findIndex((b) => b.id === bookId);

  // If the book is found, update its details
=======
  const index = books.findIndex((b) => b.id === bookId);

>>>>>>> e5895b8 (Initial commit)
  if (index !== -1) {
    const updatedAt = new Date().toISOString();

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

<<<<<<< HEAD
    // Return a success response
=======
>>>>>>> e5895b8 (Initial commit)
    return {
      status: 'success',
      message: 'Buku berhasil diperbarui',
    };
  }

<<<<<<< HEAD
  // If the book is not found, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }).code(404);
};

const deleteBookByIdHandler = (request, h) => {
<<<<<<< HEAD
  // Extract the bookId from the request parameters
  const { bookId } = request.params;

  // Find the index of the book with the matching ID
  const index = books.findIndex((b) => b.id === bookId);

  // If the book is found, remove it from the array
=======
  const { bookId } = request.params;

  const index = books.findIndex((b) => b.id === bookId);

>>>>>>> e5895b8 (Initial commit)
  if (index !== -1) {
    books.splice(index, 1);
    return {
      status: 'success',
      message: 'Buku berhasil dihapus',
    };
  }

<<<<<<< HEAD
  // If the book is not found, return a failure response
=======
>>>>>>> e5895b8 (Initial commit)
  return h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
