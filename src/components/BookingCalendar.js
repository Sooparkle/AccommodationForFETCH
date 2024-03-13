import Calendar from 'react-calendar';
import "./calendar.css"


const BookingCalendar = ( {setEndDate, setStartDate}) => {


  const handleDateChange = (date) => {
    const startDate = date?.[0].toDateString().split(' ');
    const endDate = date?.[1].toDateString().split(' ');

    setStartDate(startDate);
    setEndDate(endDate);

  };

  return (
    <div className='calendar-custom'>
    <Calendar 
      onChange={( date )=>handleDateChange( date )} 
      // value={selectedDates}
      selectRange={true}
      />
  </div>
  );
};

export default BookingCalendar;