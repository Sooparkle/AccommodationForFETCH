import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login } from "../store/authSlice";
import { NaverAuth } from "./NaverAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [ inputEmail, setInputEmail ] = useState('bamyanggang@gmail.com'); 
  const [ inputPw, setInputPw ] = useState('BIBI123');
  const navigate = useNavigate();
  const location = useLocation();
  
  const dispatch = useDispatch();
  const test = useSelector(state=>state.auth);




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
    // const response = await fetch("http://localhost:4000/login", options);

    if(!response.ok){
      throw new Error(`Login failed with status ${response.status}`)
    }
    
    const data = await response.json();
    if(!data){
      window.alert(`아이디나 비밀번호가 잘못됐습니다. 로그인을 다시 시도해주세요.`)
    }

    dispatch(login(data));
    const from = location.state?.from || location.pathname || "/";
    const accommodation = location.state?.accommodation
    navigate(from, { replace: true , state :{ accommodation} });

    }
    catch(error){
      console.error("Fetach failed", error.message)
      window.alert("아이디 또는 비밀번호를 다시 한번 확인 해주세요.")
    }

  }



  return (
    <article className="login-wrap">
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
            autoComplete="off"
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
        </div>

        {/* 비밀번호 입력폼 */}
        <div className="pw-wrap">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="userPw"
            autoComplete="off"
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

      {/* {NaverAuth()} */}
    </article>
  );
};
