import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = ({ setStartDate, setEndtDate}) => {

  const handleDateChange = (date) => {
    const startDate = date[0]?.toDateString().split(' ');
    const endDate = date[1]?.toDateString().split(' ');
    setStartDate(startDate);
    setEndtDate(endDate);
  };


  return (
    <div>
      <h2>Booking Calendar</h2>
      <Calendar
        onChange={(date)=>handleDateChange(date)}
        selectRange={true} // Allow selecting date ranges
      />
    </div>
  );
};

export default BookingCalendar;
