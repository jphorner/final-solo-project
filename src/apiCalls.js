export function getAllCustomers() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
}

export function getAllRooms() {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
}

export function getAllBookings() {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
}

export function addNewBooking(userID, date, roomNumber) {
  return fetch('http://localhost:3001/api/v1/bookings',
  {
    method: 'POST',
    body: JSON.stringify({ userID: userID, date: date, roomNumber: roomNumber }),
    headers: {
        "Content-Type":"application/json"
    },
  })
.then(response => response.json())
}
