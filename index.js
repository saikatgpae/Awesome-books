console.log(localStorage.getItem('books'));
/* eslint-disable */

if (localStorage.getItem('books') === null) {
  var list = [];

  // Clicking Add button pushing the new entry inside the list
  document.querySelector('#add').addEventListener('click', addNewBook);
} else {
  console.log('u used this web before');

  const storedBooksList = JSON.parse(localStorage.getItem('books'));
  console.log(storedBooksList.length);

  // printing the local storage
  for (let i = 0; i < storedBooksList.length; i++) {
    console.log(storedBooksList[i].title, storedBooksList[i].author);
    const book = document.createElement('ul');
    book.className = 'book-menu';
    book.innerHTML = `<li class="book-name list-group-item">${storedBooksList[i].title}</li>
                            <li class="author-name list-group-item">${storedBooksList[i].author}</li>
                            <button type="button" class="remove btn btn-outline-secondary">Remove</button>`;
    document.querySelector('.book-details').appendChild(book);
  }

  // Clicking Add button pushing the new entry inside the list
  var list = JSON.parse(localStorage.getItem('books'));
  document.querySelector('#add').addEventListener('click', addNewBook);
}

document.querySelector('#removeAll').addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

function addNewBook() {
  // pushing the form values in an array

  list.push({
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  });
  // printing the book items
  const book = document.createElement('ul');
  book.className = 'book-menu';
  book.innerHTML = `<li class="book-name list-group-item">${document.getElementById('title').value}</li>
                        <li class="author-name list-group-item">${document.getElementById('author').value}</li>
                        <button type="button" class="remove btn btn-outline-secondary">Remove</button>`;
  document.querySelector('.book-details').appendChild(book);
  // storing the array inside the local storage
  localStorage.setItem('books', JSON.stringify(list));
  const storedBooksList = JSON.parse(localStorage.getItem('books'));
  console.log(storedBooksList[storedBooksList.length - 1]);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  console.log(storedBooksList.length);
  console.log(list[list.length - 1].title);
}

/* eslint-enable */