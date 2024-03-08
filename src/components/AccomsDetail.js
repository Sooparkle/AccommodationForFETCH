import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ReactComponent as Back } from "../assets/backBtn.svg";
import { ReactComponent as FavoriteSVG } from "../assets/favorite.svg";
import BookingCalendar from "./BookingCalender";

export const AccomsDetail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selected = location.state.accommodation;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        },
      });
    }
  };

  return (
    <div className="detail-main">
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

      <div className="detail-area">
        <div>
          <img src={selected?.img_url} alt={selected?.accom_name} />
          <h2>
            {selected?.accom_name} {selected?.accom_type}
          </h2>
          <p>
            {selected?.city} {selected?.cityGu}
          </p>
          <p>
            {selected?.min_occupancy} ~ {selected?.max_occupancy}
          </p>
        </div>

        {/* react-calendar library area */}
        <div className="detail-calendar">
          <BookingCalendar
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>

        <div>
          <dl>
            <dt>기본정보</dt>
            <dd>체크인: 14:00 | 체크아웃: 11:00</dd>
            <dd>무료 Wi-Fi</dd>
            <dd>전 객실 금연</dd>
            <dd>Bath Amenity (치약, 칫솔 무료)</dd>
            <dd>
              일회용품 사용 규제 정책으로 인해, 2024년 3월 중으로 욕실용품
              3종(샴푸, 컨디셔너, 바디워시) 은 다회용으로 제공, 일회용품(칫솔,
              치약, 면도기 等) 유상 판매 전환 예정
            </dd>
            <dd>주차 가능(객실당 1대 무료)</dd>
          </dl>
        </div>

        {/* 버튼 영역 */}
        <div className="detail-button-area">
          <div className="detail-info-wrap">
            <div>
              <span>{startDate && startDate[3]} </span>
              <span className="detail-calendar-Sday">
                {startDate && startDate[2]}{" "}
              </span>
              <span>{startDate && startDate[1]} </span>~
              <span> {endDate && endDate[3]} </span>
              <span className="detail-calendar-Eday">
                {endDate && endDate[2]}{" "}
              </span>
              <span>{endDate && endDate[1]} </span>
            </div>
            <p className="detail-price">
              <span className="detail-price-won">{selected?.price}</span> 원 /
              박
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
      </div>
    </div>
  );
};
