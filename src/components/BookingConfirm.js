import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BookingConfirm = ()=>{
  const [ bookingResult ,setBookingResult] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("BookingConfirm", location);
  const bookingAccom = location.state.selected
  const bookingStartDate = location.state.dates.startDate
  const bookingEndDate = location.state.dates.endDate


  // const userData = useSelector 나중에 유저 데이터 가져와서 BookingConfirm 에 넘기기




const handleOnClick= async (e) =>{
  
  //user 데이터가 없으면 막아!!!!!!!!
  
  try{
  const options ={
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
      user:{
        user_name : 'BIBI',
        user_email : 'bamyanggang@gmail.com'
      },
      bookingAccom,
      dates:{
        bookingStartDate,
        bookingEndDate
      },
      status : 'confirm'
    })
  };
  const respone = await fetch("http://localhost:4000/bookings", options);

  const data = await respone.json();
  console.log("the date has been sent", data)
  // setBookingResult(data);
}
catch (error){
  throw new Error ("Data has been failed", error);
}
finally{
  navigate(`/booking/result`, {
    state : {
      user:{
        user_email : 'bamyanggang@gamil.com'
      },
      accom_id : bookingAccom.id
    }
  });  
};
  
}

  return(
    <>
      <h1>Booking Confirm Page</h1>
      {/* <div>{bookingResult.message}</div> */}
      <button 
        type="button"
        onClick={(e)=>handleOnClick(e)} 
      >
      예약하기
    </button>
    </>
  )
}