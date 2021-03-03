// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //loop through each book borrwed array to see which book is borrowed
  return books.filter((book) => {
    const[recent] = book.borrows;
    return !recent.returned;
  }).length


  // return books.filter((book) => {
  //   if(book.borrows.returned === false){
  //     return returnedNumber = returnedNumber + 1
  //   }
  //   console.log(returnedNumber)
  // })
  
}

function getMostCommonGenres(books) {
  /*
    Set result to an empty array
    result = {name: "", count: 0}

    iterate through books, if there isn't an object for that genre yet, I create a new object and set the length of borrows to the count

    If an object with the genre already exists, I just update the count with the length of borrows.

    Before returning the array of objects, sort based on count
  */
  let result = [];
  let genre = [];

  books.forEach(book => {
    if(!genre.includes(book.genre)){
        genre.push(book.genre)
        result.push({name: book.genre , count: 1})
      } else {
        const genreObject = result.find(genre => genre.name === book.genre)
        genreObject.count++
      }
  });

  result.sort((a,b) => b.count - a.count)
  return result.slice(0,5)
  //{ name: 'Science', count: 3 }
}



function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popular = {
      name: book.title, count: book.borrows.length
    } 
    return popular;
  })
  return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0,5);
}





function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  for (let book in books){
    let aBook = books[book].authorId;
    let aMatch = authors.find((auth) => auth.id === aBook);
    let aName = aMatch.name.first + " " + aMatch.name.last;
    popAuthors.push({ name: aName, count: books[book].borrows.length });
  }
  return popAuthors.sort((authA, authB) => (authA.count > authB.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
