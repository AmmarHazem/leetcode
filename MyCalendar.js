class MyCalendar {
  bookings = [];

  constructor() {}

  book(startTime, endTime) {
    const isDoubleBooking = this.bookings.some((booking) => {
      if (startTime >= booking[0] && startTime < booking[1]) {
        return true;
      } else if (endTime > booking[0] && endTime < booking[1]) {
        return true;
      }
      return false;
    });
    if (isDoubleBooking) {
      return false;
    }
    this.bookings.push([startTime, endTime]);
    return true;
  }
}

const calendar = new MyCalendar();
const inputs = [
  [37, 50],
  [33, 50],
  [4, 17],
  [35, 48],
  [8, 25],
];

for (const input of inputs) {
  console.log(calendar.book(input[0], input[1]));
}
