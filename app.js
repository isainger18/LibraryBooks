let success= document.getElementById("success")
let danger= document.getElementById("danger")
let gridRadios= document.getElementsByName("gridRadios")
let form= document.getElementById("bookForm")
let tableBody= document.getElementById("tableBody")
let radioValue=""


form.addEventListener("submit", LibraryBook)
window.onload = displayBook();
function LibraryBook(e){
   
    let bookName= document.getElementById("bookName").value
    let bookAuthor= document.getElementById("bookAuthor").value

gridRadios.forEach(e =>{
if(e.checked){
    radioValue= e.value
}
})
if(bookAuthor.length == 0  && bookName.length == 0 ){
    danger.style.display="block"
    success.style.display="none"
}
else{
    success.style.display="block"
    danger.style.display="none"
    getbooks()
    clear()
    displayBook()

}
e.preventDefault()
}

function Book(name, author, type) {
    this.name = name;
    this.type = type;
    this.author = author;
}

function getbooks(){
let bookName= document.getElementById("bookName").value
let bookAuthor= document.getElementById("bookAuthor").value
    let book = new Book(bookName, bookAuthor, radioValue)
    let localnotes = localStorage.getItem("books");
  if (localnotes == null) {
    items = [];
  } else {
    items = JSON.parse(localnotes);
  }
 
    items.push(book);
  localStorage.setItem("books", JSON.stringify(items));
  
}

function displayBook(){
    tableBody.innerHTML=""
    let localnotes = localStorage.getItem("books");
    if (localnotes == null) {
      items = [];
    } else {
      items = JSON.parse(localnotes);
    }
    
    items.forEach((e, index) =>{
        tableBody.innerHTML += `<tr>
        <th scope="row">${index+1}</th>
        <td>${e.name}</td>
        <td>${e.type}</td>
        <td>${e.author}</td>
        <td><button onclick="deleteBook(${index})">Delete</button></td>`
         
    })
 
}

function deleteBook(index){
    let localnotes = localStorage.getItem("books");
    items.splice(index,1)
    localStorage.setItem("books", JSON.stringify(items));
    displayBook()
}

 function clear(book) {
    let bookForm= document.getElementById("bookForm")
    bookForm.reset()
}