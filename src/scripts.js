// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import {getAllCustomers, getAllRooms, getAllBookings} from './apiCalls';
// import 'domUpdates.js';
// import apiCalls from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

window.addEventListener('load', returnData);
window.addEventListener('load', generatePastBookings);

console.log('This is the JavaScript entry file - your code begins here.');

let customerData, roomData, bookingData;


function getData() {
  return Promise.all([
    getAllCustomers(),
    getAllRooms(),
    getAllBookings(),
  ]);
}

function returnData() {
  getData().then((promiseArray) => {
    customerData = promiseArray[0].customers;
    console.log(customerData);
    roomData = promiseArray[1].rooms;
    console.log(roomData);
    bookingData = promiseArray[2].bookings;
    console.log(bookingData);
    // instantiateData();
    let randomBooking1 = Math.floor(Math.random() * promiseArray[2].bookings.length);
    console.log(bookingData[randomBooking1]);
  });
  return promiseArray;
}

// function instantiateData() {
//   let customers = customerData.map((customer) => {
//     return new Customer(customer);
//   });
//   hotel = new Hotel(roomData, bookingData, customers);
// }

// To add to domUpdates.js:
function generatePastBookings() {
  let randomBooking1 = Math.floor(Math.random() * promiseArray[2].bookings.length);
  let randomBooking2 = Math.floor(Math.random() * promiseArray[2].bookings.length);
  let randomBooking3 = Math.floor(Math.random() * promiseArray[2].bookings.length);
  console.log(randomBooking1);
}
