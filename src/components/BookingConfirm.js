import { useLocation } from "react-router-dom";

export const BookingConfirm = ()=>{
  const location = useLocation();
  console.log("BookingConfirm", location);

  const bookingAccom = location.state.selected
  const bookingStartDate = location.state.dates.startDate
  const bookingEndDate = location.state.dates.endDate

const handleOnClick= async (e) =>{
  
  console.log("Date",e)
  try{
  const options ={
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
      user:{},
      bookingAccom,
      dates:{
        bookingStartDate,
        bookingEndDate
      }
    })
  };
  const respone =fetch("http://localhost:4000/booking", options)
  console.log("the date has been sent")
  }
  catch (error){
    throw new Error ("Data has been failed", error)
  }




  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Corrected typo
      },
      body: JSON.stringify({
        // Populate user data from authentication or previous component
        user: {},
        bookingAccom,
        dates: {
          bookingStartDate,
          bookingEndDate,
        },
        status : 'booking',
      }),
    };
    fetch("http://localhost:4000/booking", options);
    console.log("The data has been sent");
  } catch (error) {
    throw new Error("Data sending failed", error);
  }
  
}

  return(
    <>
      <h1>Booking Confirm Page</h1>
      <button 
        type="button"
        onClick={(e)=>handleOnClick(e)} 
      >
      예약하기
      </button>
    </>
  )
}