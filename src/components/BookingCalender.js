import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
// import '../react-calendar/dist/Calendar.css';
import "./calendar.css"


const BookingCalendar = ( {setEndDate, setStartDate}) => {
  const [ value, onChange ] = useState(new Date());


  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // console.log("Calendar Start Date", date[0]);
    // console.log("Calendar End Date", date[1]);
  
  };

  console.log("Date value", value)



  // const handleDateChange = () => {
    // const [start, end] = dates;
    // setStartDate(start);
    // setEndDate(end);
  // }


  return (
    <div>
    <Calendar onChange={onChange} value={value} />
  </div>
  );
};

export default BookingCalendar;
