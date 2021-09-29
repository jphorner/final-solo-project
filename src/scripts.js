// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { getAllCustomers, getAllRooms, getAllBookings, addNewBooking } from './apiCalls';
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
let selectedDate;
let currentUser;
let bookings;
let loggedIn = false;

const {
  hide,
  show,
  dashboardContainer,
  dashboardText,
  bookingHistoryContainer,
  bookingsDisplay,
  expendituresDisplay,
  dateSelection,
  usernameField,
  passwordField
} = domUpdates;

window.addEventListener('load', getData);
dateSelection.addEventListener('click', showBookingForm);
roomSearch.addEventListener('click', searchForRooms);
availableRoomsDisplay.addEventListener('click', bookRoom);
loginButton.addEventListener('click', login);
logoContainer.addEventListener('click', showDashboard);

/// FUNCTIONS ///

function getData() {
  let retrievedData = Promise.all(
    [
      getAllCustomers(),
      getAllRooms(),
      getAllBookings(),
    ]
  )
  .then( data => parseData(data))
};

function parseData(data) {
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
};

function instantiateClasses() {
  let customers = allCustomers.map((customer) => {
    return new Customer(customer.id, customer.name);
  });
  let rooms = allRooms.map((room) => {
    return new Room(room.number, room.roomType, room.bedSize, room.numBeds, room.costPerNight);
  });
  bookings = allBookings.map((booking) => {
    return new Booking(booking.id, booking.userID, booking.date, booking.roomNumber)
  })
  populatePastBookings(bookings, rooms);
};

function populatePastBookings(bookings, rooms) {
  bookingsDisplay.innerHTML = ``;
  let pastBookings = bookings.filter( booking => booking.date < "2020/02/01");
  let bookingsToPopulate = [pastBookings[0], pastBookings[1], pastBookings[2], pastBookings[3]];
  let totalExpenditures = 0;
  bookingsToPopulate.forEach( booking => {
    let matchingRoom = rooms.find( room => room.number === booking.roomNumber );
    totalExpenditures += matchingRoom.costPerNight;
    bookingsDisplay.innerHTML += `
      <article class="past-booking" id="pastBooking" aria-label="past booking" role="listitem" tabindex='0'>
        <h4>
        <b>Room booked: ${booking.roomNumber}</b><br><br>
        Date booked: <i>${booking.date}</i><br>
        Nightly cost: <b>$${matchingRoom.costPerNight}</b>
        </h4>
      </article>
    `;

    expendituresDisplay.innerHTML += `
      <article class="expenditure" id="expenditure" role="listitem" tabindex='0'>
        <i>${booking.date}</i><br>
        <b>$${matchingRoom.costPerNight}</b><br><br>
      </article>
    `
  });

  expendituresDisplay.innerHTML += `
    <h3 role="list">TOTAL:</h3><br><br>
    <h2 role="listitem" tabindex='0'>$${totalExpenditures}</h2>
  `
};

function showBookingForm() {
  domUpdates.showBookingForm();
};

function searchForRooms() {
  domUpdates.hide(searchOptionsContainer);
  availableRoomsDisplay.innerHTML = ``;
  let availableRooms = allRooms.map( room => room );
  allRooms.forEach( room => availableRooms.push(room));
  selectedDate = selectADate.value.split('-').join('/');
  show(availableRoomsDisplay);

  allBookings.forEach( booking => {
    if ( booking.date === selectedDate ) {
      availableRooms.filter( room => {
        if (room.number === booking.roomNumber) {
          availableRooms.splice(availableRooms.indexOf(room), 1);
        }
      }
    )}
  });
  if (roomTypes.value !== 'any') {
    let availableRoomsByType = [];
    availableRooms.filter( room => {
      if (room.roomType === roomTypes.value) {
        availableRoomsByType.push(room);
      }
    });
    availableRooms = availableRoomsByType;
  };
  if (availableRooms[0]) {
    availableRooms.forEach( room => {
      room['originalData'] = room;
      if (room.bidet === false) {
        room['bidetConfirmation'] = 'No bidet';
      } else {
        room['bidetConfirmation'] = 'Has bidet';
      }
      availableRoomsDisplay.innerHTML += `
        <article class="available-room" id="availableRoom" role="listitem">
          <i><h4>Room ${room.number}</h4></i>
          <span class="room-type">Type: ${room.roomType}</span><br>
          <span class="bed-number">Number of beds: ${room.numBeds}</span><br>
          <span class="bed-size">Bed size: ${room.bedSize}</span><br>
          <span class="bidet-confirmation"><i>${room.bidetConfirmation}</i></span><br><br>
          <button class="book-this-room" id="${room.number}">Book this room</button>
        </article>
      `;
    })
  } else {
    availableRoomsDisplay.innerHTML += `
      <h3><center>We're sorry, there don't seem to be any available rooms matching your search.<br><br>
      Please adjust your search options and try again.</center></h3>
    `
  }
};

function login() {
  event.preventDefault();
  let username = usernameField.value;
  if (passwordField.value === 'overlook2021') {
  currentUser = username[8] + username[9];
  domUpdates.show(dateSelection);
  domUpdates.show(dashboardContainer);
  domUpdates.show(dashboardText);
  domUpdates.hide(loginContainer);
  loggedIn = true;
  }
};

function bookRoom(event) {
  let user = new Customer(currentUser, 'Customer');
  if (event.target.classList.contains('book-this-room')) {
    let matchingRoomNumber = parseInt(event.target.id);
    addNewBooking(parseInt(user.id), selectedDate, matchingRoomNumber);
    event.target.parentNode.innerHTML += `<span class="booking-confirmation">Booking confirmed!</span>`
  }
};

function showDashboard() {
  if (loggedIn) {
    domUpdates.hide(bookingFormContainer);
    domUpdates.show(dashboardContainer);
    domUpdates.show(dashboardText);
  }
};
