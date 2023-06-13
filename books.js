const books = [
    { title: 'JAVA', author: 'Author 1', genre: 'Education', year: 2010, image: 'images/books1.jpg' },
    { title: 'C++ ', author: 'Author 2', genre: 'Education', year: 2008, image: 'images/book2.jpg' },
    { title: 'Data Structure', author: 'Author 3', genre: 'Education', year: 2005, image: 'images/books3.jpg' },
    { title: 'OS', author: 'Author 3', genre: 'Education', year: 2009, image: 'images/book4.jpg' },
    { title: 'LEO', author: ' LOKI', genre: 'action', year: 2022, image: 'images/leo.jpg' },
    { title: 'MASTER', author: 'LOKI', genre: 'action', year: 2021, image: 'images/master.jpg' },
    { title: 'VIKRAM', author: 'LOKI', genre: 'mystery', year: 2020, image: 'images/vikram.jpg' },
    { title: 'KAITHI', author: 'LOKI', genre: 'mystery', year: 2023, image: 'images/kaithi.jpg' },
    { title: 'RRR', author: 'ATLEE', genre: 'drama', year: 2020, image: 'images/rrr.jpg' },
    { title: 'VIRAT KOHLI', author: 'Robert', genre: 'biopic', year: 2023, image: 'images/kohli.jpg' },
    { title: 'DHONI', author: 'Robert', genre: 'biopic', year: 2021, image: 'images/dhoni.jpg' },
    { title: 'DEVREV TRAINING', author: 'DEVREV', genre: 'Education', year: 2002, image: 'images/dev.png' },

  ];
  
  const bookList = document.getElementById('book-list');
  const filterGenre = document.getElementById('filter-genre');
  const filterYear = document.getElementById('filter-year');
  
  displayBooks();
  
  
  filterGenre.addEventListener('change', displayBooks);
  filterYear.addEventListener('change', displayBooks);
  
 
  function displayBooks() {
    const selectedGenre = filterGenre.value;
    const selectedYear = filterYear.value;
  
    
    bookList.innerHTML = '';
  
   
    const filteredBooks = books.filter(book => {
      if (selectedGenre !== 'all' && book.genre !== selectedGenre) {
        return false;
      }
      if (selectedYear !== 'all' && book.year !== parseInt(selectedYear)) {
        return false;
      }
      return true;
    });
  
    filteredBooks.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
  
      const imageElement = document.createElement('img');
      imageElement.src = book.image;
      bookElement.appendChild(imageElement);
  
      const detailsElement = document.createElement('div');
      detailsElement.classList.add('book-details');
  
      const titleElement = document.createElement('h2');
      titleElement.classList.add('book-title');
      titleElement.textContent = book.title;
      detailsElement.appendChild(titleElement);
  
      const authorElement = document.createElement('p');
      authorElement.classList.add('book-author');
      authorElement.textContent = `Author: ${book.author}`;
      detailsElement.appendChild(authorElement);
  
      const genreElement = document.createElement('p');
      genreElement.classList.add('book-genre');
      genreElement.textContent = `Genre: ${book.genre}`;
      detailsElement.appendChild(genreElement);
  
      const yearElement = document.createElement('p');
      yearElement.classList.add('book-year');
      yearElement.textContent = `Year: ${book.year}`;
      detailsElement.appendChild(yearElement);
  
      bookElement.appendChild(detailsElement);
  
      bookList.appendChild(bookElement);
    });
  }
  