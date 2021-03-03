// First part of the Exercise: Book Constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title}, by ${author}, ${pages} pages, ${read}`;
}

const secrets1 = new Book('Secrets', 'JK', '219', 'read');
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
theHobbit.info();
console.log(theHobbit.info());

// https://github.com/Mulungo/FrontEndCourseExercises/pull/10 submit link

// Second part of the Exercise: Web Banking - Account Constructor plus prototype inheritance
function Account(name, surname) {
    this.name = name;
    this.surname = surname;
    let ibanCode = "GR100012153"
    this.balance = 0;
    this.info = () => `New account created for ${name} ${surname}, IBAN: ${ibanCode};`
}

// Account.prototype.getBalance = () => this.getBalance2; "this" in arrow functions does not work the same. 
Account.prototype.getBalance = function () {
    return this.balance;
}

// Account.prototype.deposit = (amount) => this.balance += +amount; "this" in arrow functions does not work the same. 
Account.prototype.deposit = function (amount) {
    return this.balance += +amount;
}

// Account.prototype.withdraw = (amount) => { "this" in arrow functions does not work the same. 
Account.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        return "Error 'Insufficient balance!'"
    }
    if (!Number.isInteger(amount) || amount < 0) {
        return "Error 'Invalid amount'"
    }
    return this.balance -= +amount;
};

const newAccount = new Account("Kiuri", "Negrão")

console.log(newAccount.info());

newAccount.getBalance()
newAccount.deposit(100)  
newAccount.getBalance()
newAccount.withdraw(50)  
newAccount.getBalance()
newAccount.withdraw( 500 )   
newAccount.withdraw( "50" )  
newAccount.withdraw( -150 )  