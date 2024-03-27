import React from "react";
import { useNavigate } from "react-router-dom";

export const NaverAuth = () =>{
  const REACT_APP_NAVER_ID = 'jZqFNn5osrqKbmxXtvZw';
  // const REDIRECT_URI = encodeURI("https://project3-accom.pages.dev/callback");
  const REDIRECT_URI = encodeURI("http://localhost:3000/callback");
  const STATE = "naver_LOGIN"
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_NAVER_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  
  const navigate = useNavigate();

  const NaverLogin = async () =>{
    window.location.href = NAVER_AUTH_URL;

      // window.location.href를 변수로 만들어서 예시. windowLocation(NAVER_AUTH_URL)
  };



  return <button className="naver-btn"  onClick={NaverLogin}>네이버 로그인</button>
};
