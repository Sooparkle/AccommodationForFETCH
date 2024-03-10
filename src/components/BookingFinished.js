import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BookingFinished = () =>{
  const locate = useLocation();
  const accomId = locate.state.accom_id;
  
  console.log("Confirmed",accomId)

  useEffect(()=>{
    const resultFetch = async () => {
      const options ={
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
          user_email : 'bamyanggang@gmail.com',
          accomId,
        })
      }
      
      const response = await fetch(`http://localhost:4000/bookings/result`, options);
      const data = await response.json();

      console.log("BookingCompleted Data", data)
    }
    resultFetch();
  },[])
  
  return(
    <>
    <h1>Booking Completed</h1>
    </>
  )
}