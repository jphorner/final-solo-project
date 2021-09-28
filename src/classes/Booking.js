import Room from './Room.js';
import Customer from './Customer.js'

class Booking {
  constructor(id, userID, date, roomNumber) {
    this.id = id;
    this.userID = userID;
    this.date = date;
    this.roomNumber = roomNumber;
    this.roomServiceCharges = null;
  }
}

export default Booking;
