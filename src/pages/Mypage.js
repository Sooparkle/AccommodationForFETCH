import { useSelector } from "react-redux";
import { LoginForm } from"../components/LoginForm";
import { MyprofileList } from "../components/MyprofileList"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Mypage = () =>{
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const searchParams = new URLSearchParams(window.location.search);
  const loggedIn = searchParams.get("loggedIn") === "true";
  const existingUser = searchParams.get("existingUser") === "true";

  console.log("Naver social Login",loggedIn);



  return (
    <div className='main'>
      <div className='mypage-wrap'>
        <h1>로그인 페이지</h1>
        {loggedIn ? (
          existingUser ? (
            <MyprofileList /> // Existing user profile
          ) : (
            <div>회원가입이 완료되었습니다!</div> // New user message
          )
        ) : (
          <LoginForm /> // Login form
        )}
        <Header />
        <Footer />
      </div>
    </div>
  );
};