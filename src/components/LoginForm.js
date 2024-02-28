import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login } from "../store/authSlice";
import { NaverAuth } from "./NaverAuth";

export const LoginForm = () => {
  const [ inputEmail, setInputEmail, ] = useState(''); 
  const [ inputPw, setInputPw ] = useState('');
  
  const dispatch = useDispatch();


  const handleOnSubmit = (e) =>{
    e.preventDefault();
    dispatch(login())

  }


  return (
    <div className="login-wrap">
      <form
        onSubmit={handleOnSubmit}
      >
        {/* 아이디 입력폼 */}
        <div className="email-wrap">
          <label htmlFor="email">E-mail 입력</label>
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
          <label htmlFor="pw">비밀번호 입력</label>
          <input
            type="password"
            name="userPw"
            value={inputPw}
            onChange={(e) => {
              setInputPw(e.target.value);
            }}
          />
        </div>
        <button type="submit">로그인 하기</button>
      </form>
      {NaverAuth()}
    </div>
  );
};
