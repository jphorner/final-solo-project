export function getAllCustomers() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    // .then(data => data)
    // .catch(error => {domUpdates.popupMessage(error, 3000, "red")})
}

export function getAllRooms() {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  // .then(data => data)
  // .catch(error => {domUpdates.popupMessage(error, 3000, "red")})
}

export function getAllBookings() {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  // .then(data => data)
  // .catch(error => {domUpdates.popupMessage(error, 3000, "red")})
}
//
// export function addNewBooking() {
//   return fetch('http://localhost:3001/api/v1/bookings',
//   {
//     method: 'POST',
//     body: JSON.stringify({userID: id, ingredientID: ingredientID, ingredientModification: ingredientAmount}),
//     headers: {
//         "Content-Type":"application/json"
//     },
//   })
// .then(response => response.json())
// // .catch(error => {domUpdates.popupMessage(error, 3000, "red")})
// }
