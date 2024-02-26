import { useState } from "react"
import React from 'react';
import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { MyprofileList } from "../components/Myprofile";

export const Login = () =>{
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return(
    <>
      <div>로그인 페이지</div>
      { !isLoggedIn && <LoginForm /> }
      { isLoggedIn && <MyprofileList /> }
    </>
  )
}