/* eslint-disable */
var storedBooksList = JSON.parse(localStorage.getItem('books'));
console.log(storedBooksList);
class Book {
  constructor(title, author, index) {
    this.title = title;
    this.author = author;
    this.index = index;
  }
}

class Books {
  constructor() {
    this.list = [];
  }

  add(title, author) {
    if (Array.isArray(this.list)) {
      this.list.push(new Book(title, author));
    }
  }

  removeItem(index) {
    if (Array.isArray(this.list)) {
      const array = this.list;
      array.splice(index, 1);
    }
  }
}

// Printing the local storage data
if (localStorage.getItem('books') != null) {
  for (let i = 0; i < storedBooksList.length; i++) {
    const book = document.createElement('ul');
    book.className = 'book-menu';
    book.innerHTML = `<li class="book-name list-group-item">${storedBooksList[i].title}</li>
                        <li class="author-name list-group-item">${storedBooksList[i].author}</li>
                        <li class="index author-name list-group-item">${i}</li>
                        <button type="button" class="remove btn btn-outline-secondary">Remove</button>`;
    document.querySelector('.book-details').appendChild(book);
  }
}


// ADD NEW BOOK.

document.getElementById('add').addEventListener('click', () => {
  const books = new Books();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.add(title, author);
  // console.log(books.list);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books.list));
    location.reload();
  } else {
    const newList = storedBooksList.concat(books.list);
    localStorage.setItem('books', JSON.stringify(newList));
    location.reload();
  }
});

// REMOVING THE WHOLE LIST
document.querySelector('#removeAll').addEventListener('click', () => {
  localStorage.removeItem('books');
  location.reload();
});

/* eslint-enable */
