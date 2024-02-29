import { useSelector } from "react-redux";
import { LoginForm } from"../components/LoginForm";
import { MypageList } from "../components/MypageList"
import { Favorite } from "../components/Favorite";

export const Mypage = () =>{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return(
    <>
      <h1>로그인 페이지</h1>
      { !isLoggedIn && <LoginForm />  }
      { isLoggedIn && <MypageList /> }
      <Favorite />
    </>
  )
}