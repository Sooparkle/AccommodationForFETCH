import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MyprofileList } from "../components/Myprofile";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";
import { useScrollTop } from "../components/UseScrollTop";

export const Mypage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
useScrollTop();

  return (
    <>
      <main className="main">
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
