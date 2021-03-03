// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //let accumulator = [[],[]]
  // let accumulator = 0
  // return books.reduce((acc, book) => acc + book.borrows[0], accumulator)

  const partitionedBooks = [[],[]];
  partitionedBooks[1] = books.filter(book => book.borrows[0].returned);
  partitionedBooks[0] = books.filter(book => !book.borrows[0].returned);
  return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map(borrower => {
    let result = accounts.find(account => borrower.id === account.id)
    result.returned = borrower.returned
    return result
  })

  return result.filter((borrower, i) => result.findIndex(item => item.id === borrower.id) === i)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};