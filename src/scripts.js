// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { getAllCustomers, getAllRooms, getAllBookings } from './apiCalls';
import Customer from './classes/Customer.js';
import Room from './classes/Room.js';
import Booking from './classes/Booking.js';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let dataGroup = [];
let returnedData = [];
let allCustomers = [];
let allRooms = [];
let allBookings = [];

const {
  dashboardContainer,
  dashboardText,
  bookingHistoryContainer,
  bookingsDisplay,
} = domUpdates;

window.addEventListener('load', getData);
// window.addEventListener('load', generatePastBookings);

console.log('This is the JavaScript entry file - your code begins here.');

// let customerData = null;
// // console.log(customerData)
// let roomData;
// let bookingData;

function getData() {
  let retrievedData = Promise.all(
    [
      getAllCustomers(),
      getAllRooms(),
      getAllBookings(),
    ]
  )
  .then( data => parseData(data))
}

function parseData(data) {
  // console.log(data)
  let customerData = data[0].customers;
  customerData.forEach( customer => {
    allCustomers.push(customer);
  })
  let roomData = data[1].rooms;
  roomData.forEach( room => {
    allRooms.push(room);
  })
  let bookingData = data[2].bookings;
  bookingData.forEach( booking => {
    allBookings.push(booking);
  })
  instantiateClasses();
  return;
}

console.log('CUSTOMERS: ', allCustomers);
console.log('ROOMS: ', allRooms);
console.log('BOOKINGS: ', allBookings);

function instantiateClasses() {
  let customers = allCustomers.map((customer) => {
    return new Customer(customer.id, customer.name);
  });
  // console.log(customers);
  let rooms = allRooms.map((room) => {
    return new Room(room.number, room.roomType, room.bedSize, room.numBeds, room.costPerNight);
  });
  // console.log(rooms);
  let bookings = allBookings.map((booking) => {
    return new Booking(booking.id, booking.userID, booking.date, booking.roomNumber)
  })
  // console.log(bookings);
  populatePastBookings(bookings, rooms);
}

function populatePastBookings(bookings, rooms) {
  let testBooking1 = {id: "5fwrgu4i7k55hl6yl", userID: 44, date: "2020/01/30", roomNumber: 24, roomServiceCharges: null}
  let pastBookings = bookings.filter( booking => booking.date < "2020/02/01");
  let bookingsToPopulate = [pastBookings[0], pastBookings[1], pastBookings[2], pastBookings[3]];
  let totalExpenditures = 0;
  bookingsToPopulate.forEach( booking => {
    let matchingRoom = rooms.find( room => room.number === booking.roomNumber );
    totalExpenditures += matchingRoom.costPerNight;
    bookingsDisplay.innerHTML += `
      <article class="past-booking" id="pastBooking">
        <h4>
        <b>Room booked: ${booking.roomNumber}</b><br><br>
        Date booked: <i>${booking.date}</i><br>
        Nightly cost: <b>${matchingRoom.costPerNight}</b>
        </h4>
      </article>
    `;

    expendituresDisplay.innerHTML += `
      <article class="expenditure" id="expenditure">
        <i>${booking.date}</i><br>
        <b>${matchingRoom.costPerNight}</b><br><br>
      </article>
    `
  });

    expendituresDisplay.innerHTML += `
      <h3>TOTAL:</h3><br><br>
      <h2>${totalExpenditures}</h2>
    `
}

// console.log('TEST: ', allBookings);
populatePastBookings();

// To add to domUpdates.js:
// function generatePastBookings() {
//   let randomBooking1 = Math.floor(Math.random() * bookingData.length);
//   // let randomBooking2 = Math.floor(Math.random() * promises[2].bookings.length);
//   // let randomBooking3 = Math.floor(Math.random() * promises[2].bookings.length);
//   console.log(randomBooking1);
// }
