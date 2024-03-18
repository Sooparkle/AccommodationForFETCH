import React from "react";
import { useNavigate } from "react-router-dom";

export const NaverAuth = () =>{
  const REACT_APP_NAVER_ID = 'jZqFNn5osrqKbmxXtvZw';
  const REDIRECT_URI = encodeURI("https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/callback");
  const STATE = "naver_LOGIN"
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_NAVER_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  
  const navigate = useNavigate();

  const NaverLogin = () =>{
    window.location.href = NAVER_AUTH_URL;

  };

  const handleNaverLogin = async() =>{
    const call = await NaverLogin();
    const data = await call.json();
    navigate("/mypage");

  }

  return <button className="naver-btn"  onClick={NaverLogin}>네이버 로그인</button>
};
