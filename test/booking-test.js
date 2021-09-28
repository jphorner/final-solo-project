import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer.js';
import Room from '../src/classes/Room.js';
import Booking from '../src/classes/Booking.js';

let booking1;
let booking2;
let booking3;

describe('Customer data', function() {
  beforeEach(() => {
    booking1 = new Booking(22847, 51, '09/27/21', 60);
  });
});
