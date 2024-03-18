import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login } from "../store/authSlice";
import { NaverAuth } from "./NaverAuth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [ inputEmail, setInputEmail ] = useState(''); 
  const [ inputPw, setInputPw ] = useState('');
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const test = useSelector(state=>state.auth);

  console.log("useSelector", test);

  const handleOnSubmit = async (e) =>{
    e.preventDefault();

    try{
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        email : inputEmail,
        password : inputPw
      })
    };

    const response = await fetch("https://port-0-pj3-server-dc9c2nlt7zv05q.sel5.cloudtype.app/login", options);

    if(!response.ok){
      throw new Error(`Login failed with status ${response.status}`)
    }
    
    const data = await response.json();
    console.log("login data", data)
    dispatch(login(data));

    navigate(-1)
    console.log("useSelector inside fetch", test);

    }
    catch(error){
      window.alert(`아이디나 비밀번호가 잘못됐습니다. 로그인을 다시 시도해주세요.\n${error.message}`)
      // throw new Error("fetch failed", error.message);
    }

  }

  // const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  // const emailTest = ()=>{
  //   if(!emailRegEx.test(inputEmail)) {
  //     return window.alert("이메일 형식이 맞지 않습니다.");
  //   }
  // }

  // const handleKeyPress = (e)=>{
  //   e.preventDefault();
  //   if (e.key ==='Enter'){
  //     emailTest();

  //   }

  // }




  return (
    <div className="login-wrap">
              <p>로그인 페이지</p>

      <form
        onSubmit={(e)=>handleOnSubmit(e)}
      >
        
        {/* 아이디 입력폼 */}
        <div className="email-wrap">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="userEmail,"
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
        </div>
        <div className="pw-wrap">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="userPw"
            value={inputPw}
            onChange={(e) => {
              setInputPw(e.target.value);
            }}
          />
        </div>
        <button 
          type="submit"
          // onClick={(e)=>handleKeyPress(e)}
          >
          로그인 하기
        </button>
      </form>
      {NaverAuth()}
    </div>
  );
};
