const books = [
    {
      title: "Book 1",
      author: "Author A",
      year: 1990,
      genre: "Science Fiction",
    },
    {
      title: "Book 2",
      author: "Author B",
      year: 1985,
      genre: "Mystery",
    },
    {
      title: "Book 3",
      author: "Author A",
      year: 2005,
      genre: "Science Fiction",
    },
    {
      title: "Book 4",
      author: "Author C",
      year: 1998,
      genre: "Fantasy",
    },
  ];
  
  function findOldestBook(books) {
    let oldestBook = books[0];
    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
      }
    }
    return oldestBook;
  }
  function findAuthorWithMostBooks(books) {
    const authorCounts = {};
    let maxCount = 0;
    let authorWithMostBooks = "";
  
    for (let i = 0; i < books.length; i++) {
      const author = books[i].author;
      authorCounts[author] = (authorCounts[author] || 0) + 1;
      if (authorCounts[author] > maxCount) {
        maxCount = authorCounts[author];
        authorWithMostBooks = author;
      }
    }
  
    return authorWithMostBooks;
  }
  
  function findBooksByAuthor(books, authorName) {
    return books.filter(book => book.author === authorName);
  }
  function countBooksByGenre(books) {
    const genreCounts = {};
    for (let i = 0; i < books.length; i++) {
      const genre = books[i].genre;
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    }
    return genreCounts;
  }
  console.log("Oldest Book:", findOldestBook(books));
  console.log("Author with Most Books:", findAuthorWithMostBooks(books));
  console.log("Books by Author A:", findBooksByAuthor(books, "Author A"));
  console.log("Count of Books by Genre:", countBooksByGenre(books));
  