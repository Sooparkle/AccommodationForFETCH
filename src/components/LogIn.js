import { useState } from "react"

export const Login = () =>{

  const [ inputEmail, setInputEmail, ] = useState(''); 
  const [ inputPw, setInputPw ] = useState(''); 


  const handleOnSubmit = (e) =>{
    e.preventDefault();
    
    let body={
      email :inputEmail,
      password : inputPw
    }

  }

  return(
    <div>
      <div>로그인 페이지</div>

      <div className="login-wrap">
        <form onSubmit={()=>{handleOnSubmit()}}>
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
      </div>
    </div>
  )
}