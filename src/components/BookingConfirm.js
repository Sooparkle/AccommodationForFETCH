import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactComponent as Back } from "../assets/backBtn.svg";

export const BookingConfirm = () => {
  const [bookingResult, setBookingResult] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("BookingConfirm", location);

  const [ adultNumbers, setAdultNumbers ] = useState(0);
  const [ childNumbers, setChildNumbers ] = useState(0);
  const [ totalNumber, setTotalNumber ] = useState(null);
  const [ totalPrice, setTotalRpice ] = useState(null);

  const bookingAccom = location?.state.selected;
  const bookingStartDate = location?.state.dates.startDate;
  const bookingEndDate = location?.state.dates.endDate;
  const bookingAdult = location?.state.adultNumbers;
  const bookingChild = location?.state.childNumbers;


  useEffect(()=>{
    const totalNumber = parseInt(bookingAccom.min_occupancy) + parseInt(adultNumbers) + parseInt(childNumbers);
    setTotalNumber(totalNumber);
    const totalPrice = parseInt(bookingAccom.price.replace(",","")) + (parseInt(adultNumbers) * bookingAccom.extra_adult) + (parseInt(childNumbers) * bookingAccom.extra_child)
    setTotalRpice(totalPrice);
    // console.log("totalPrice", totalPrice);
  },[adultNumbers, childNumbers])  



  const monthStringToIndex = (data) => {
    const indexMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return indexMonths.indexOf(data) + 1;
  };

  const incrementAdult = ()=>{
    if((adultNumbers + childNumbers) < (bookingAccom?.max_occupancy)){
      setAdultNumbers(prevAdultNumbers => prevAdultNumbers + 1)
    }
  };

  const decrementAdult = ()=>{
    if((adultNumbers + childNumbers) > 0){  
      setAdultNumbers(prevAdultNumbers => prevAdultNumbers - 1)
    }
  }

  const incrementChild = ()=>{
    if((adultNumbers + childNumbers) < (bookingAccom?.max_occupancy)){
      setChildNumbers(prevChildNumbers => prevChildNumbers + 1)
    }
  };

  const decrementChild = ()=>{
    if((adultNumbers + childNumbers) > 0){  
      setChildNumbers(prevChildNumbers => prevChildNumbers - 1)
    }
  }

  const handleOnClick = async (e) => {
    console.log("Date", e);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {},
          bookingAccom,
          dates: {
            bookingStartDate,
            bookingEndDate,
          },
          extraNumber: {
            bookingAdult,
            bookingChild,
          },
        }),
      };
      const respone = fetch("http://localhost:4000/booking", options);
      const data = await respone.json();
      console.log("the date has been sent", data);
    } catch (error) {
      throw new Error("Data has been failed", error);
    } finally {
      navigate(`/booking/result`, {
        state: {
          user: {
            user_email: "bamyanggang@gamil.com",
          },
          accom_id: bookingAccom.id,
        },
      });
    }
  };


  return (
    <div className="confirm-main">
      {/* contents area */}
      <div className="confirm-area">
        <div className="confirm-header">
          <Back className="confirm-back-btn" onClick={() => navigate(-1)} />
          <div>{bookingAccom?.accom_name} 예약하기</div>
          <div></div>
        </div>

        <div>
          <p>사용자 정보</p>
          <p>이름 : </p>
          <p>이메일 : </p>
        </div>

        <div className="confirm-accommodation-info">
          <p>숙박 정보</p>
          <div>
            <p>숙박 이름 : {bookingAccom?.accom_name}</p>
            <p>숙박 장소 : {bookingAccom?.city} {bookingAccom?.cityGu}</p>

          </div>
        </div>
        <div className="detail-number-add">
          <div>
            <p>성인 인원
              <span className="detail-number-add-describe">(13세 이상)</span> : 
              <span >
                <button 
                  onClick={()=>incrementAdult()}
                  disabled={(adultNumbers+childNumbers) === bookingAccom?.max_occupancy}
                
                >+</button></span> {adultNumbers} <span >
                <button 
                  onClick={()=>decrementAdult()}
                  disabled={adultNumbers === 0}
                  className="decrease">-</button>
              </span>
            </p>
          </div>
          <div>
            <p>어린 인원
              <span className="detail-number-add-describe">(2~12세)</span> : 
              <span >
                <button 
                  onClick={()=>incrementChild()} 
                  disabled={(adultNumbers+childNumbers) === bookingAccom?.max_occupancy}
                  >+</button></span> {childNumbers} <span >
                <button 
                  onClick={()=>decrementChild()}
                  disabled={childNumbers === 0 }
                  className="decrease">-</button></span>
              </p>
          </div>
        </div>

        <div className="confirm-booking-info">
          <p>예약정보</p>
          <div>

            <p>예약한 일자 : 
                <span> {bookingStartDate && bookingStartDate[3]} </span>
                <span>{bookingStartDate && monthStringToIndex(bookingStartDate[1])}월 </span>
                <span className="detail-calendar-Sday">
                  {bookingStartDate && bookingStartDate[2]}{" "}
                </span>
                ~<span> {bookingEndDate && bookingEndDate[3]} </span>
                <span>{bookingEndDate && monthStringToIndex(bookingEndDate[1])}월 </span>
                <span className="detail-calendar-Eday">
                  {bookingEndDate && bookingEndDate[2]}{" "}
                </span>
              </p>

            </div>
            <div className="confirm-brief-booking">
              <p>기본 인원 : {bookingAccom?.min_occupancy}</p>
              <p>추가 인원 : 성인 {adultNumbers} | 어린이 {childNumbers}</p>
    
              <p>총 인원 :  {totalNumber}</p>
              </div>
              <hr />
              <h2>총 금액 : {totalPrice}</h2>
        </div>
        <Footer />
      </div>
    </div>

  );
};