import React from "react";

export const NaverAuth = () =>{
  const NAVER_CLIENT_ID  = "jZqFNn5osrqKbmxXtvZw";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const STATE = "naver_LOGIN"
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NvaerLogin = () =>{
    window.location.href = NAVER_AUTH_URL;
  };

  return <button onClick={NvaerLogin}>네이버 로그인</button>
};
