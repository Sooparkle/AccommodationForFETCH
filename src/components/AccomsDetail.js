import { useLocation, useNavigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";

export const AccomsDetail = () =>{
  const params = useParams();
  const location = useLocation();
  const selected = location.state.accommodation;

  // const userData = useSelector 나중에 유저 데이터 가져와서 BookingConfirm 에 넘기기
  
const [ selectedAccommodation, setSelectedAccommodation ] = useState(null);
const navigate = useNavigate();
console.log("Detail navigate", navigate);


  // const fetchAccommodationDetails = async () => {
  //   try {
  //     const response = await fetch(`/accommodation/${params.accommodationId}`);
  //     const data = await response.json();
  //     setSelectedAccommodation(data);
  //   } catch (error) {
  //     console.error("Error fetching accommodation details:", error);
  //     // Handle error, e.g., display error message
  //   }
  // };

  // useEffect(() => {
  //   fetchAccommodationDetails();
  // }, [params.accommodationId]);


const handleOnConfirm =()=>{
  console.log("작동")
  navigate(`/booking/${params.accommodationId}`, {state:{  }})
}

  
  return(
    <div className="detail-main">
      <div className="detail-area">
        <div>
          <p>{selected?.accom_name} {selected?.accom_type}</p>
          <img src={selected?.img_url} alt={selected?.accom_name} />
          <p>{selected?.city} {selected?.cityGu}</p>
          <p>{selected?.max_occupancy} ~ {selected?.max_occupancy}</p>
        </div>
        <div>
          <dl>
            <dt>기본정보</dt>
            <dd>체크인: 14:00 | 체크아웃: 11:00</dd>
            <dd>무료 Wi-Fi</dd>
            <dd>전 객실 금연</dd>
            <dd>Bath Amenity (치약, 칫솔 무료)</dd>
            <dd>일회용품 사용 규제 정책으로 인해, 2024년 3월 중으로 욕실용품 3종(샴푸, 컨디셔너, 바디워시) 은 다회용으로 제공, 일회용품(칫솔, 치약, 면도기 等) 유상 판매 전환 예정</dd>
            <dd>주차 가능(객실당 1대 무료)</dd>
          </dl>
        </div>
        <div className="detail-button-area">
          <p>{selected?.price}</p>
          <button 
            className="detail-button" 
            type="button"
            onClick={()=>handleOnConfirm()}
            >
            예약하기
          </button>
        </div>
      </div>
    </div>
  )
}