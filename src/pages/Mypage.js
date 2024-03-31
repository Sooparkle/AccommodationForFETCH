import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Login } from "../pages/Login";
import { MyprofileList } from "../components/Myprofile";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoginForm } from '../components/LoginForm';

export const Mypage = () =>{
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(()=>{

  },[isLoggedIn])


  return (
    <>
    <div className='main'>
      <div className='mypage-wrap'>

        { 
        isLoggedIn ?  <MyprofileList />
          : <LoginForm /> 
        }
      </div>
        <Header />
    </div>
        <Footer />
        </>
  );
};