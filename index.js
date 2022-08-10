/* eslint-disable */

if (localStorage.getItem('books') === null) {
    var list = [];

    // Clicking Add button pushing the new entry inside the list
    document.querySelector('#add').addEventListener('click', addNewBook);
} else {
    const storedBooksList = JSON.parse(localStorage.getItem('books'));

    // printing the local storage
    for (let i = 0; i < storedBooksList.length; i++) {
        const book = document.createElement('ul');
        book.className = 'book-menu';
        book.innerHTML = `<li class="book-name list-group-item">${storedBooksList[i].title}</li>
                            <li class="author-name list-group-item">${storedBooksList[i].author}</li>
                            <li class="index d-none author-name list-group-item">${i}</li>
                            <button type="button" class="remove btn btn-outline-secondary">Remove</button>`;
        document.querySelector('.book-details').appendChild(book);
    }

    // Clicking Add button pushing the new entry inside the list
    var list = JSON.parse(localStorage.getItem('books'));
    document.querySelector('#add').addEventListener('click', addNewBook);
}

// REMOVING THE WHOLE LIST
document.querySelector('#removeAll').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

// ADD NEW BOOK FUNCTION

function addNewBook() {
    // pushing the form values in an array
    list.push({
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
    });

    // storing the array inside the local storage
    localStorage.setItem('books', JSON.stringify(list));

    // Clearing the inputs of form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    location.reload();
}
// DELETE THE CURRENT ROW OF THE DATDABASE.

function deleteRow() {
    const index = this.previousElementSibling.innerHTML;
    let bookList = JSON.parse(localStorage.getItem('books'));
    bookList.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookList));
    location.reload();
}

document.querySelectorAll('.remove').forEach((removeButton) => {
    removeButton.addEventListener('click', deleteRow);
});

/* eslint-enable */