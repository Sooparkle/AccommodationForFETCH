import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ReactComponent as Back } from "../assets/backBtn.svg";
import { ReactComponent as FavoriteSVG } from "../assets/favorite.svg";
import BookingCalendar from "./BookingCalender";
import { Footer } from "./Footer";
import { ReactComponent as Score } from "../assets/score.svg";

export const AccomsDetail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [countDays, setCountDays] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selected = location.state.accommodation;
  const basics = selected.accom_info.split('/');
  const benefits = selected.accom_benefit.split('/');
  const cancels = selected.cancel.split('/');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [ adultNumbers, setAdultNumbers ] = useState(0);
  const [ childNumbers, setChildNumbers ] = useState(0);



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

  useEffect(() => {
    if (endDate) {
      const countStartDate = new Date(
        startDate[3],
        monthStringToIndex(startDate[1]),
        startDate[2]
      );
      const countEndDate = new Date(
        endDate[3],
        monthStringToIndex(endDate[1]),
        endDate[2]
      );

      // // 기간 동안 숙박료
      const timeDifference = countEndDate.getTime() - countStartDate.getTime();
      const stayingNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      const stayingNightsPrice =
        parseInt(selected.price.replace(",", "")) * stayingNights;

      setCountDays(stayingNightsPrice);
    }
  }, [endDate]);

  const handleConfirmBooking = () => {
    // Optional: combine dates for booking logic
    if (!startDate || !endDate) {
      console.error("Please select a date range to book.");
      window.alert("시작 날짜와 종료 날짜를 기입해주세요.");
      return;
    } else {
      navigate(`/booking/:${params.accommodationId}`, {
        state: {
          selected,
          dates: {
            startDate,
            endDate,
          },
          adultNumbers,
          childNumbers
        },
      });
    }
  };

  return (
    <div className="detail-main">
      <div className="detail-area">
        
        <div className="detail-header">
          <Back className="detail-back-btn" onClick={() => navigate("/")} />
          <div>{selected?.accom_name}</div>
          <div>
            <FavoriteSVG
              fill={isClicked ? "red" : "#fff"}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        </div>

        <div className="detail-describe">
          <img src={selected?.img_url} alt={selected?.accom_name} />
          <h2>
            {selected?.accom_name} {selected?.accom_type}
          </h2>
          <p>
            {selected?.city} {selected?.cityGu}
          </p>
          <p>
            숙박 가능 인원 : 최소 {selected?.min_occupancy} ~ 최대{selected?.max_occupancy}
          </p>
          <p className="detail-score-wrap">
            <Score className="data-score-svg" /> {selected?.score}
          </p>
        </div>

        {/* react-calendar library area */}
        <div className="detail-calendar">
          <p className="detail-calendar-theme">숙박일정</p>
          <BookingCalendar
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
        <div className="detail-number-add">
          <div>
            <p>성인 인원
              <span className="detail-number-add-describe">(13세 이상)</span> : 
              <span >
                <button onClick={()=>setAdultNumbers(adultNumbers + 1)}>+</button></span> {adultNumbers} <span >
                <button 
                  onClick={()=>setAdultNumbers(adultNumbers -1 )}
                  className="decrease">-</button>
              </span>
            </p>
          </div>
          <div>
            <p>어린 인원
              <span className="detail-number-add-describe">(2~12세)</span> : 
              <span >
                <button onClick={()=>setChildNumbers(childNumbers + 1)} >+</button></span> {childNumbers} <span >
                <button 
                  onClick={()=>setChildNumbers(childNumbers -1 )}
                  className="decrease">-</button></span>
              </p>
          </div>
        </div>

        <div className="detail-basic-info">
          <p className="detail-basic-info-theme">숙박정보</p>
          {
            selected && (
            basics.map((basic_info) => {
              return <p>- {basic_info}</p>
            })
            )
          }
        </div>

        <div className="detail-benefit-info">
          <p className="detail-benefit-info-theme">숙박혜택</p>
          {
            selected && (
            benefits.map((benefit_info) => {
              return <p>- {benefit_info}</p>
            })
            )
          }
        </div>

        <div className="detail-cancel-info">
          <p className="detail-cancel-info-theme">숙박혜택</p>
          {
            selected && (
              cancels.map((cancel) => {
              return <p>- {cancel}</p>
            })
            )
          }
        </div>

        {/* 버튼 영역 */}
        <div className="detail-button-area">
          <div className="detail-info-wrap">
            {endDate ? (
              <div>
                <span>{startDate && startDate[3]} </span>
                <span>{startDate && monthStringToIndex(startDate[1])}월 </span>
                <span className="detail-calendar-Sday">
                  {startDate && startDate[2]}{" "}
                </span>
                ~<span> {endDate && endDate[3]} </span>
                <span>{endDate && monthStringToIndex(endDate[1])}월 </span>
                <span className="detail-calendar-Eday">
                  {endDate && endDate[2]}{" "}
                </span>
              </div>
            ) : (
              <p className="detail-calendar-day-check">날짜를 입력해 주세요.</p>
            )}
            <p className="detail-price">
              <span className="detail-price-won">
                {countDays ? ` (예상가) ${countDays} 원 ` : "-"}
              </span>
            </p>
          </div>

          <button
            className="detail-submit-button"
            type="button"
            onClick={() => handleConfirmBooking()}
          >
            예약하기
          </button>
        </div>
      <Footer />
      </div>
    </div>
  );
};
