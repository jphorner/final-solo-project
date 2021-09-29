import currentUser from './scripts';

const dashboardContainer = document.querySelector('#dashboardContainer');
const dashboardText = document.querySelector('#dashboardText');
const bookingHistoryContainer = document.querySelector('#bookingHistoryContainer');
const bookingsDisplay = document.querySelector('#bookingsDisplay');
const expendituresDisplay = document.querySelector('#expendituresDisplay');
const dateSelection = document.querySelector('#dateSelection');
const selectADate = document.querySelector('#selectADate');
const roomSearch = document.querySelector('#roomSearch');
const bookingFormContainer = document.querySelector('#bookingFormContainer');
const availableRoomsDisplay = document.querySelector('#availableRoomsDisplay');
const searchOptionsContainer = document.querySelector('#searchOptionsContainer');
const roomTypeSelect = document.querySelector('#roomTypes');
const loginForm = document.querySelector('#loginForm');
const usernameField = document.querySelector('#usernameField');
const passwordField = document.querySelector('#passwordField');
const usernameError = document.querySelector('#usernameError');
const passwordError = document.querySelector('#passwordError');
const loginButton = document.querySelector('#loginButton');
const loginContainer = document.querySelector('#loginContainer');
const logoContainer = document.querySelector('#logoContainer');

function showBookingForm() {
  hide(dashboardContainer);
  hide(dashboardText);
  hide(availableRoomsDisplay);
  show(searchOptionsContainer);
  show(bookingFormContainer);
  show(bookingForm);
}

function displayUsernameError() {
  usernameError.innerHTML = ``;
  usernameError.innerHTML += 'Unknown username';
}

function displayPasswordError() {
  passwordError.innerHTML = ``;
  passwordError.innerHTML += 'Invalid password';
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

const domUpdates = {
  hide,
  show,
  displayUsernameError,
  displayPasswordError,
  showBookingForm,
  dashboardContainer,
  dashboardText,
  bookingHistoryContainer,
  bookingsDisplay,
  expendituresDisplay,
  dateSelection,
  roomTypeSelect,
  loginForm,
  usernameField,
  passwordField,
  loginButton,
};

export default domUpdates;
