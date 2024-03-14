import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/authSlice";
import { NaverAuth } from "./NaverAuth";


export const LoginForm = () =>{
  const [ inputEmail, setInputEmail ] = useState(''); 
  const [ inputPw, setInputPw ] = useState(''); 
  const dispatch = useDispatch();

  const handleOnSubmit = async (e)=>{
    e.preventDefault();

  try{
    const options = {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        email : inputEmail,
        password : inputPw
      })
    }
    
    console.log("options",options)

    const response = await fetch('http://localhost:4000/login', options);
    if(response.ok){
      console.log("response from Login", response)
      const data = await response.json();
      
      // dispatch(loginUser(data));
      return Promise.resolve(data); // Resolve with fetched data
    } else {
      console.error('Login failed');
    }
    
  }
  catch (error){
    throw new Error ('The login has been failed', error.message)
  }
  }


  return(
  <>

    <div className="login-wrap">
      <form onSubmit={(e)=>handleOnSubmit(e)}>

        {/* 아이디 입력폼 */}
        <div className="email-wrap">
          <label htmlFor="email">E-mail 입력</label>
          <input 
            type="email"
            name="userEmail,"
            value={inputEmail}
            onChange={(e)=>{setInputEmail(e.target.value)}}
          />
        </div>
        <div className="pw-wrap">
          <label htmlFor="pw">비밀번호 입력</label>
          <input
            type="password"
            name="userPw"
            value={inputPw}
            onChange={(e)=>{setInputPw(e.target.value)}}
          />
        </div>
        <button 
          type="submit"
        
          >로그인 하기</button>
      </form>
      <NaverAuth />
    </div>
    </>
  )
}