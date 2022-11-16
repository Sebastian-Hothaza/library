// TODO
// Change button to submit OR somehow enforce that title can not be empty

let myLibrary = [];




const inputTitle = document.querySelector('input[name="inputTitle"]');
const inputAuthor = document.querySelector('input[name="inputAuthor"]');
const inputPages = document.querySelector('input[name="inputPages"]');
const inputRead = document.querySelector('input[name="inputRead"]');

const grid = document.querySelector('.bookGrid');

const addBookBtn = document.querySelector('#addBookBtn');


class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead(){
        if (this.read){
            this.read = false;
        } else {
            this.read = true;
        }
    }
}



addBookBtn.addEventListener('click', e => {
    // Create the book and append to the array
    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    addBookToLibrary(newBook, myLibrary);
    resetFields();
    displayBooks();
    updateSummary();
});


// Adds book to the myLibrary array
function addBookToLibrary(Book, arr){
    arr.push(Book);
}


function displayBooks(){
    grid.textContent = "";
    myLibrary.forEach((book, index) => {
        // Append book to grid

        // First we create the elements of the card
        const newCardTitle = document.createElement('div');
        newCardTitle.classList.add('title')
        newCardTitle.textContent = book.title;

        // Delete button
        const newCardDelete = document.createElement('button');
        const newCardDeleteIcon = document.createElement('span');

        newCardDeleteIcon.classList.add('material-icons');
        newCardDeleteIcon.textContent = "delete";
        newCardDelete.appendChild(newCardDeleteIcon);
        newCardTitle.appendChild(newCardDelete);
        newCardDelete.addEventListener('click', e => {
            removeBook(index);
        });

        const newCardAuthor = document.createElement('div');
        newCardAuthor.classList.add('author')
        newCardAuthor.textContent = "Author: " + book.author;

        const newCardPages = document.createElement('div');
        newCardPages.classList.add('numPages')
        newCardPages.textContent = "Pages: " + book.pages;

        const newCardRead = document.createElement('div');
        if (book.read){
            newCardRead.classList.add('read');
            newCardRead.textContent = "Read";
        }else{
            newCardRead.classList.add('unread');
            newCardRead.textContent = "Not yet read!";
        }

        // Mark read button
        const newCardToggleRead = document.createElement('button');
        const newCardToggleReadIcon = document.createElement('span');

        newCardToggleReadIcon.classList.add('material-icons');
        newCardToggleReadIcon.textContent = "menu_book";
        newCardToggleRead.appendChild(newCardToggleReadIcon);

        newCardRead.appendChild(newCardToggleRead);
        newCardToggleRead.addEventListener('click', e => {
            flipRead(index);
        });

        // Now, create the newCard
        const newCard = document.createElement('div');
        newCard.setAttribute('id',index); // Do we even really need this?
        newCard.classList.add('card');

        // Attach the created elements to the newCard
        newCard.appendChild(newCardTitle);
        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardPages);
        newCard.appendChild(newCardRead);


        // Attach the newCard to the grid
        grid.appendChild(newCard);
    });



}

function updateSummary(){
    let numPages = 0;
    let numRead = 0;
    myLibrary.forEach((book) => {
        numPages+=parseInt(book.pages);
        if (book.read){
            numRead++;
        }
    });
    
    document.querySelector('#totalBooks>div:nth-child(-n+1)').textContent = myLibrary.length;
    document.querySelector('#totalPages>div:nth-child(-n+1)').textContent = numPages;
    document.querySelector('#booksRead>div:nth-child(-n+1)').textContent = numRead;
}

function resetFields(){
    inputTitle.value="";
    inputAuthor.value="";
    inputPages.value="";
    inputRead.checked=false;
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
    updateSummary();
}

function flipRead(index){
    myLibrary[index].toggleRead();
    displayBooks();
    updateSummary();
}
