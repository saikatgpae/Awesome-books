/* eslint-disable */
class Book {
/* eslint-enable */
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
  const storedBooksList = JSON.parse(localStorage.getItem('books'));
  /* eslint-disable */
  for (let i = 0; i < storedBooksList.length; i++) {
  /* eslint-enable */
    const book = document.createElement('ul');
    book.className = 'book-menu';
    book.innerHTML = `<li class="book-name list-group-item">${storedBooksList[i].title}</li>
                    <li class="author-name list-group-item">${storedBooksList[i].author}</li>
                    <li class="index author-name list-group-item">${i}</li>
                    <button type="button" class="remove btn btn-outline-secondary">Remove</button>`;
    document.querySelector('.book-details').appendChild(book);
  }
}

// DELETE THE CURRENT ROW OF THE DATDABASE.
function deleteRow() {
  const index = this.previousElementSibling.innerHTML;
  const books = new Books();
  const booksStored = JSON.parse(localStorage.getItem('books'));
  books.list = booksStored;
  books.removeItem(index);
  localStorage.setItem('books', JSON.stringify(books.list));
  /* eslint-disable */
  location.reload();
  /* eslint-enable */
}

document.querySelectorAll('.remove').forEach((removeButton) => {
  removeButton.addEventListener('click', deleteRow);
});

// ADD NEW BOOK.
document.getElementById('add').addEventListener('click', () => {
  const books = new Books();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const storedBooksList = JSON.parse(localStorage.getItem('books'));
  books.add(title, author);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books.list));
    /* eslint-disable */
    location.reload();
    /* eslint-enable */
  } else {
    const newList = storedBooksList.concat(books.list);
    localStorage.setItem('books', JSON.stringify(newList));
    /* eslint-disable */
    location.reload();
    /* eslint-enable */
  }
});

// REMOVING THE WHOLE LIST
document.querySelector('#removeAll').addEventListener('click', () => {
  localStorage.removeItem('books');
  /* eslint-disable */
  location.reload();
  /* eslint-enable */
});