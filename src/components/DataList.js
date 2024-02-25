
import React from 'react';

export const DataList =()=>{

  return (
  <div className="data-list-wrap">
    <img className="data-list-img" src="https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Fexhibition%2FitemContents%2Fa6b561c3bc867d43a03d849d558d09e0.jpg&w=1200&q=75" alt="숙박업소 이름" />
    <div className="dat-list-detail" >
      <p>서울시, 종로구</p>
      <p><span className="data-list-signature">서울 양반 동네 양반살이</span></p>
      <p><span className="data-list-price">100,000</span>원</p>
      <span className="data-list-event" >특가중</span>
    </div>
  </div>
  )
}