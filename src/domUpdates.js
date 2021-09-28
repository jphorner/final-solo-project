const dashboardContainer = document.querySelector('#dashboardContainer');
const dashboardText = document.querySelector('#dashboardText');
const bookingHistoryContainer = document.querySelector('#bookingHistoryContainer');
const bookingsDisplay = document.querySelector('#bookingsDisplay');
const expendituresDisplay = document.querySelector('#expendituresDisplay');

const domUpdates = {
  displayPastBookings(booking) {
    // bookingsDisplay.innerHTML += `
    //   <article class="past-booking">
    //   ${booking.date}
    //   </article>
    // `
  },

  dashboardContainer,
  dashboardText,
  bookingHistoryContainer,
  bookingsDisplay,
};

export default domUpdates;
