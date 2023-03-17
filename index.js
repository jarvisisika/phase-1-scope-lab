
var customerName = 'John';


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}


const leastFavoriteCustomer = 'Dave';


function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Tom'; 
}

// Declare a global variable called customerName and initialize it to 'bob'
var customerName = 'bob';

// Define a function called upperCaseCustomerName that modifies the global customerName variable to be in uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
