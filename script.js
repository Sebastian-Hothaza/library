// TODO
// Change button to submit OR somehow enforce that title can not be empty

let myLibrary = [];




const inputTitle = document.querySelector('input[name="inputTitle"]');
const inputAuthor = document.querySelector('input[name="inputAuthor"]');
const inputPages = document.querySelector('input[name="inputPages"]');
const inputRead = document.querySelector('input[name="inputRead"]');

const grid = document.querySelector('.bookGrid');


const addBookBtn = document.querySelector('#addBookBtn');
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

    // Delete button
    const newCardDelete = document.createElement('button');
    newCardDelete.textContent = "X";
    newCardTitle.appendChild(newCardDelete);
    newCardDelete.addEventListener('click', e => {
        console.log("KILL");
    });



    const newCardAuthor = document.createElement('div');
    newCardAuthor.classList.add('author')
    newCardAuthor.textContent = "Author: " + newBook.author;

    const newCardPages = document.createElement('div');
    newCardPages.classList.add('numPages')
    newCardPages.textContent = "Pages: " + newBook.pages;

    const newCardRead = document.createElement('div');
    if (newBook.read){
        newCardRead.classList.add('read');
        newCardRead.textContent = "Read";
    }else{
        newCardRead.classList.add('unread');
        newCardRead.textContent = "Not yet read!";
    }

    // Now, create the newCard
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Attach the created elements to the newCard
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardAuthor);
    newCard.appendChild(newCardPages);
    newCard.appendChild(newCardRead);


    // Attach the newCard to the grid
    grid.appendChild(newCard);


    // Update summary counter
    document.querySelector('#totalBooks>div:nth-child(-n+1)').textContent = 1 + 
        parseInt(document.querySelector('#totalBooks>div:nth-child(-n+1)').textContent);

    document.querySelector('#totalPages>div:nth-child(-n+1)').textContent = parseInt(newBook.pages) + 
        parseInt(document.querySelector('#totalPages>div:nth-child(-n+1)').textContent);

    if (newBook.read){
        document.querySelector('#booksRead>div:nth-child(-n+1)').textContent = 1 + 
            parseInt(document.querySelector('#booksRead>div:nth-child(-n+1)').textContent);
    }
});

const removeBookBtn = document.querySelector('#addBookBtn');
removeBookBtn.addEventListener('click', e => {

});

// Book CTOR
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if (this.read){
        this.read = false;
    } else {
        this.read = true;
    }
}

// Adds book to the myLibrary array
function addBookToLibrary(Book, arr){
    arr.push(Book);
}


function displayBooks(){
    for (let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}