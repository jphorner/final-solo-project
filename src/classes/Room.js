class Room {
  constructor(number, roomType, bedSize, numBeds, costPerNight) {
    this.number = number;
    this.roomType = roomType;
    this.costPerNight = costPerNight;
    this.bidet = false;
    this.bedSize = bedSize;
    this.numBeds = numBeds;
    this.booked = false;
  }
}

export default Room;
