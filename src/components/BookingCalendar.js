import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = ({ start, end }) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleConfirmBooking = () => {
    // Optional: combine dates for booking logic
    if (!startDate || !endDate) {
      console.error("Please select a date range to book.");
      return;
    }

    const selectedDateRange = { startDate, endDate };
    // Send selectedDateRange to server for booking
    console.log("Selected date range:", selectedDateRange);
  };

  return (
    <div>
      <h2>Booking Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        selectRange={true} // Allow selecting date ranges
      />
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingCalendar;
