import React, { useReducer, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactComponent as Back } from "../assets/backBtn.svg";

export const BookingConfirm = () => {
  const [bookingResult, setBookingResult] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const [adultNumbers, setAdultNumbers] = useState(0);
  const [childNumbers, setChildNumbers] = useState(0);
  const [totalNumber, setTotalNumber] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const totalPriceRef = useRef(null);

  const bookingAccom = location?.state.selected;
  const bookingStartDate = location?.state.dates.startDate;
  const bookingEndDate = location?.state.dates.endDate;
  const bookingAdult = location?.state.adultNumbers;
  const bookingChild = location?.state.childNumbers;
  const bookingDatesPrice = location?.state.countDays;

console.log()
  useEffect(() => {
    const totalNumber =
      parseInt(bookingAccom.min_occupancy) + parseInt(adultNumbers) + parseInt(childNumbers);
    setTotalNumber(totalNumber);
    const totalPrice =
      parseInt(bookingDatesPrice.toString().replace(",", "")) +
      parseInt(adultNumbers) * bookingAccom.extra_adult +
      parseInt(childNumbers) * bookingAccom.extra_child;


      let priceStr = totalPrice.toString();
  
      // Insert comma at third position from the end
      if (priceStr.length > 3) {
        priceStr = priceStr.slice(0, -3) + ',' + priceStr.slice(-3);
      }
    
      // Insert comma at sixth position from the end if price length is more than 6
      if (priceStr.length > 7) {
        priceStr = priceStr.slice(0, -7) + ',' + priceStr.slice(-7);
      }
      setTotalPrice(priceStr);

      
    // console.log("totalPrice", totalPrice);
  }, [adultNumbers, childNumbers]);


const stringPrice = (price)=> {

  let passingPrice = price.toString();
  if (passingPrice.length > 3) {
    passingPrice = passingPrice.slice(0, -3) + ',' + passingPrice.slice(-3);
  }

  // Insert comma at sixth position from the end if price length is more than 6
  if (passingPrice.length > 7) {
    passingPrice = passingPrice.slice(0, -7) + ',' + passingPrice.slice(-7);
  }

}



  // const initialCounters = adultNumbers + childNumbers;

  // const reducer = (state, action) =>{
  //   switch(action.type) {
  //     case 'adult-add':
  //     return action.payload +1
  //   }

  // }

  //   const [ initialNumbers, dispatch ] = useReducer(reducer, initialCounters);

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

  const handleOnClick = async (e) => {
    e.preventdefault();
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
          totalDaysPrice : totalPriceRef.current
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

  const incrementAdult = () => {
    if (adultNumbers + childNumbers < bookingAccom?.max_occupancy) {
      setAdultNumbers((prevAdultNumbers) => prevAdultNumbers + 1);
    }
  };

  const decrementAdult = () => {
    if (adultNumbers + childNumbers > 0) {
      setAdultNumbers((prevAdultNumbers) => prevAdultNumbers - 1);
    }
  };

  const incrementChild = () => {
    if (adultNumbers + childNumbers < bookingAccom?.max_occupancy) {
      setChildNumbers((prevChildNumbers) => prevChildNumbers + 1);
    }
  };

  const decrementChild = () => {
    if (adultNumbers + childNumbers > 0) {
      setChildNumbers((prevChildNumbers) => prevChildNumbers - 1);
    }
  };



  return (
    <div className="confirm-main">
      {/* contents area */}
      <div className="confirm-area">
        <div className="confirm-header">
          <Back className="confirm-back-btn" onClick={() => navigate(-1)} />
          <div>{bookingAccom?.accom_name} 예약</div>
          <div></div>
        </div>

        <div className="confirm-user-info">
          <p className="confirm-user-info-theme">사용자 정보</p>
          <div>
            <p>이름 : </p>
            <p>이메일 : </p>
          </div>
        </div>

        <div className="confirm-accommodation-info">
          <p className="confirm-accommodation-info-theme">숙박 정보</p>
          <div>
            <p>숙박 이름 : {bookingAccom?.accom_name}</p>
            <p>
              숙박 장소 : {bookingAccom?.city} {bookingAccom?.cityGu}
            </p>
          </div>
        </div>

        <div className="confirm-extra-numbers">
          <p className="confirm-extra-number-theme">추가 인원</p>
          <div className="confirm-number-add">
            <div>
              <p>
                성인 인원
                <span className="detail-number-add-describe">
                  (13세 이상)
                </span>{" "}
                :
                <span>
                  <button
                    onClick={() => incrementAdult()}
                    disabled={
                      adultNumbers + childNumbers ===
                      bookingAccom?.max_occupancy
                    }
                  >
                    +
                  </button>
                </span>{" "}
                {adultNumbers}{" "}
                <span>
                  <button
                    onClick={() => decrementAdult()}
                    disabled={adultNumbers === 0}
                    className="decrease"
                  >
                    -
                  </button>
                </span>
              </p>
            </div>
            <div>
              <p>
                어린 인원
                <span className="detail-number-add-describe">(2~12세)</span> :
                <span>
                  <button
                    onClick={() => incrementChild()}
                    disabled={
                      adultNumbers + childNumbers ===
                      bookingAccom?.max_occupancy
                    }
                  >
                    +
                  </button>
                </span>{" "}
                {childNumbers}{" "}
                <span>
                  <button
                    onClick={() => decrementChild()}
                    disabled={childNumbers === 0}
                    className="decrease"
                  >
                    -
                  </button>
                </span>
              </p>
            </div>
          </div>
          <span>추가 가능 인원 : {bookingAccom?.max_occupancy}</span>
        </div>

        <div className="confirm-booking-info">
          <p className="confirm-booking-info-theme">예약정보</p>

          <div className="confirm-booking-date">
            <p>
              예약한 일자 :
              <span> {bookingStartDate && bookingStartDate[3]} </span>
              <span>
                {bookingStartDate && monthStringToIndex(bookingStartDate[1])}월{" "}
              </span>
              <span className="confirm-calendar-Sday">
                {bookingStartDate && bookingStartDate[2]}{" "}
              </span>
              ~<span> {bookingEndDate && bookingEndDate[3]} </span>
              <span>
                {bookingEndDate && monthStringToIndex(bookingEndDate[1])}월{" "}
              </span>
              <span className="confirm-calendar-Eday">
                {bookingEndDate && bookingEndDate[2]}{" "}
              </span>
            </p>
          </div>


          <div className="confirm-brief-booking">
            <p>기본 인원 : {bookingAccom?.min_occupancy}</p>
            <p className="confirm-brief-date-basic">{bookingDatesPrice} 원</p>
            <p>추가 인원 : 성인 {adultNumbers} || 어린이 {childNumbers}</p>
            <p>총 인원 : <span> {totalNumber} </span></p>
          </div>
          <h2>총 금액 : {totalPrice} 원</h2>
        </div>
        <button 
          type="button"
          onClick={()=>handleOnClick()}
          className="confirm-payment-button"
          >
          결제하기
          </button>
        <Footer />
      </div>
    </div>
  );
};
