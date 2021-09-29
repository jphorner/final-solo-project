import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/Room.js';
import Booking from '../src/classes/Booking.js';

let testRoom;
let testBooking;

describe('Room data', function() {
  beforeEach(() => {
    testRoom = new Room(60, 'suite', 'queen', 2, 120);
  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should have a type', () => {
    expect(testRoom.roomType).to.equal('suite');
  })

  it('should be able to be booked', () => {
    testBooking = new Booking(22847, 51, '09/27/21', 60);
    testRoom.booked = true;

    expect(testBooking.roomNumber).to.equal(testRoom.number);
    expect(testRoom.booked).to.deep.equal(true);
  })
});
