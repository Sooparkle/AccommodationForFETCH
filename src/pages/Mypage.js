import React from 'react';
import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { MyprofileList } from "../components/Myprofile";

export const Mypage = () =>{
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const searchParams = new URLSearchParams(window.location.search);
  const loggedIn = searchParams.get("loggedIn") === "true";

  console.log("Naver social Login",loggedIn);



  return(
    <div className='main'>
      <div className='mypage-wrap'>
      <h1>로그인 페이지</h1>
      { loggedIn ? (
        <MyprofileList /> 
        ) : (
          <LoginForm /> 
          )
        }
        </div>
    </div>
  )
}