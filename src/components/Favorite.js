import React from "react";

export const Favorite = () =>{

  return(
    <>
      <h2>Favorite</h2>
      <div className="favorite-wrap">
        <div className="favorite-img-wrap">
          <img src="https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Fexhibition%2FitemContents%2Fa6b561c3bc867d43a03d849d558d09e0.jpg&w=1200&q=75" alt="" />
        </div>
        <div className="favorite-info">
          <p className="favorite-info-title">숙박업소 이름</p>
          <p><span>서울시 종로구</span><span>2024.02.01</span></p>
          <span className="">예약완료</span><span className="">결제완료</span>
          <button className="favorite-detail-button" type="button" onClick={()=>{}}>상세보기</button>
        </div>
      </div>
    </>
  )
};

