// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  //searches through the acocunts array and finds if account.id matches the id provided
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  //sorts the accounts by last name alphabetically 
  return accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last > lastNameB.name.last ? 1:-1))
}

function getTotalNumberOfBorrows(account, books) {
  // filters the books by borrows and returns the length.
  const borrowedBooksByThisAccount = books.filter(book=>book["borrows"].some(borrow=>borrow.id===account.id));
  return borrowedBooksByThisAccount.length;

  //dont read this code it's my old one...
  //I SAID DONT READ IT! O_o
  // for (let i = 0; i < books.length; i++) {
  //   const book = books[i];
  //   return book.borrows.length
  // }

}

function getBooksPossessedByAccount(account, books, authors) {
  const booksPossessedByThisAccount=books.filter(book => book["borrows"].some(borrow => borrow.id===account.id && borrow.returned===false));
  
  const addAuthorsToBooks= booksPossessedByThisAccount.map(book => {
    book["author"]=authors.find(author =>author.id===book.authorId);
    return book;
  });
  return addAuthorsToBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
