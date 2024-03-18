import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Login } from "../pages/Login";
import { MyprofileList } from "../components/Myprofile";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Mypage = () =>{
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(()=>{
  }, [isLoggedIn])

  return (
    <div className='main'>
      <div className='mypage-wrap'>
        {isLoggedIn ? (
            <MyprofileList /> // Existing user profile
          ) : (
          <Login /> 
        )}
      </div>
        <Header />
        <Footer />
    </div>
  );
};