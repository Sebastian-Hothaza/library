// TODO
// Change button to submit OR somehow enforce that title can not be empty

let myLibrary = [];



const inputTitle = document.querySelector('input[name="inputTitle"]');
const inputAuthor = document.querySelector('input[name="inputAuthor"]');
const inputPages = document.querySelector('input[name="inputPages"]');
const inputRead = document.querySelector('input[name="inputRead"]');

const grid = document.querySelector('.bookGrid');


const addBookBtn = document.querySelector('button');

addBookBtn.addEventListener('click', e => {
    

    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    addBookToLibrary(newBook, myLibrary);

    
    // Reset fields
    inputTitle.value="";
    inputAuthor.value="";
    inputPages.value="";
    inputRead.checked=false;

    // Append book to grid

    // First we create the elements of the card
    const newCardTitle = document.createElement('div');
    newCardTitle.classList.add('title')
    newCardTitle.textContent = newBook.title;

    const newCardAuthor = document.createElement('div');
    newCardAuthor.classList.add('author')
    newCardAuthor.textContent = newBook.author;

    const newCardPages = document.createElement('div');
    newCardPages.classList.add('numPages')
    newCardPages.textContent = newBook.pages;

    const newCardRead = document.createElement('div');
    newCardRead.classList.add('read')
    newCardRead.textContent = newBook.read;

    // Create the newCard
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Attach the created elements to the newCard
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardAuthor);
    newCard.appendChild(newCardPages);
    newCard.appendChild(newCardRead);


    // Attach the newCard to the grid
    grid.appendChild(newCard);


});


// Book CTOR
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Adds book to the myLibrary array
function addBookToLibrary(Book, arr){
    arr.push(Book);
}

const myBook = new Book("World of Wonder", "John Smith", 45, false);
const myBook2 = new Book("World of Wonder 2", "John Smith", 145, false);
const myBook3 = new Book("World of Wonder 3", "John Smith", 245, false);

function displayBooks(){
    for (let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}