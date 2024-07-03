import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MyprofileList } from "../components/Myprofile";
import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";
import { useScrollTop } from "../components/UseScrollTop";
import { Footer } from "../components/Footer";


export const Mypage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  return (
    <>
      <main className="main"
        style={{height : isLoggedIn ? "100%" : "100vh"}}

      >
        <div className="mypage-wrap"
          style={{height : isLoggedIn ? "100%" : "100vh"}}
        >
          {isLoggedIn ? <MyprofileList /> : <LoginForm />}
        </div>
        <Header />
      </main>
      <Footer />
    </>
  );
};
