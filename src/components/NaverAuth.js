import React from "react";

export const NaverAuth = () =>{
  const REACT_APP_NAVER_ID = 'jZqFNn5osrqKbmxXtvZw';
  const REDIRECT_URI = encodeURI("http://localhost:4000/callback");
  const STATE = "naver_LOGIN"
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_NAVER_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;


  const NaverLogin = () =>{
    window.location.href = NAVER_AUTH_URL;
  };

  return <button  onClick={NaverLogin}>네이버 로그인</button>
};
