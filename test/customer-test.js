import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer.js';
import Room from '../src/classes/Room.js';
import Booking from '../src/classes/Booking.js';

let josh;
let testRoom;
let testBooking;

describe('Customer data', function() {
  beforeEach(() => {
    josh = new Customer(51, 'Josh');
    testRoom = new Room(60, 'suite', 'queen', 2, 120);
    testBooking = new Booking(22847, 51, '09/27/21', 60);

    josh.bookings.push(testBooking);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should recognize Josh an instance of Customer', () => {
    expect(josh).to.be.an.instanceof(Customer);
  });

  it('should initialize with a name and an ID', () => {
    expect(josh.name).to.equal('Josh');
    expect(josh.id).to.equal(51);
  })

  it('should keep track of customer bookings', () => {
    expect(josh.bookings[0]).to.equal(testBooking);
  })

  it('should share a matching ID between Customer and Booking classes', () => {
    expect(josh.bookings[0].userID).to.equal(josh.id);
  })
});
