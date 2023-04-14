// Box Object
function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
}
Box.prototype.addBook = function (book) {
  this.content.push(book);
};
Box.prototype.numberOfBooks = function () {
  return "number of books in box: " + this.content.length;
};
Box.prototype.deleteBook = function (bookTitle) {
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].title === bookTitle) {
      if (this.content[i].numofCopies > 1) {
        this.content[i].numofCopies--;
        console.log("deleted one copy this book");
        break;
      } else {
        this.content.splice(i, 1);
        console.log("deleted last copy of this book");
        break;
      }
    }
  }
};
//Book Object
function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  this.title = title;
  this.numofChapters = numofChapters;
  this.author = author;
  this.numofPages = numofPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
  Book.count++;
}
Book.count = 0;
Book.numCreatedBooks = function () {
  return "num of all created books are: " + Book.count;
};
/*














*/
var book1 = new Book("Book1", 3, "Mohamed", 300, "Publisher1", 2);
var book2 = new Book("Book2", 4, "Ahmed", 400, "Publisher2", 4);
var book3 = new Book("Book3", 5, "Mahmoud", 500, "Publisher3", 2);
var book4 = new Book("Book4", 3, "Sameh", 200, "Publisher4", 6);
var book5 = new Book("Book5", 4, "Ali", 250, "Publisher5", 1);
console.log(Book.numCreatedBooks());

var box = new Box(50, 60, 70, "material1");
box.addBook(book1);
box.addBook(book2);
console.log(box.numberOfBooks());
console.log(box.content);

var box2 = new Box(70, 70, 70, "material2");
box2.addBook(book3);
box2.addBook(book4);
console.log(box2.numberOfBooks());
console.log(box2.content);

box2.deleteBook("Book3");
console.log(box2.content);
box2.deleteBook("Book3");
console.log(box2.content);

console.log(Book.numCreatedBooks());
console.log(
  "number of current books are:",
  box.content.length + box2.content.length
);
