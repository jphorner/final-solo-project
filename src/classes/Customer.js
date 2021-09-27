import Hotel from './Hotel.js';

class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.bookings = [];
  }
}

export default Customer;
