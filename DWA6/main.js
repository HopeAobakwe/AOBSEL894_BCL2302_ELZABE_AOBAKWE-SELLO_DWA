import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

let page = 1;
let matches = books;

function createBookElement(book) {
  const bookPreview = document.createElement('book-preview');
  bookPreview.book = book;
  return bookPreview;
}

function renderBooks() {
  const bookItemsContainer = document.querySelector('[data-list-items]');
  bookItemsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const startIndex = (page - 1) * BOOKS_PER_PAGE;
  const endIndex = page * BOOKS_PER_PAGE;
  const visibleBooks = matches.slice(startIndex, endIndex);
  for (const book of visibleBooks) {
    const element = createBookElement(book);
    fragment.appendChild(element);
  }
  bookItemsContainer.appendChild(fragment);
  const remainingBooks = matches.length - endIndex;
  const listButton = document.querySelector('[data-list-button]');
  listButton.innerText = `Show more (${remainingBooks > 0 ? remainingBooks : 0})`;
  listButton.disabled = remainingBooks <= 0;
}

function applyTheme(theme) {
  const darkColor = '255, 255, 255';
  const lightColor = '10, 10, 20';
  if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', darkColor);
    document.documentElement.style.setProperty('--color-light', lightColor);
  } else {
    document.documentElement.style.setProperty('--color-dark', lightColor);
    document.documentElement.style.setProperty('--color-light', darkColor);
  }
}

function handleSearchFormSubmit(event) {
  // ...
}

function handleListButtonClick() {
  // ...
}

function handleBookItemClick(event) {
  // ...
}

function initialize() {
  // Add event listeners
  // ...

  // Initial rendering
  renderBooks();

  // Apply theme based on user preference
  // ...

  // Update remaining book count
  // ...
}

// Initialize the script
initialize();