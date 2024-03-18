import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NaverCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the URL contains the authorization code from Naver
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Naver authentication successful, navigate to /mypage
      navigate("/mypage");
    } else {
      // Handle authentication failure
      console.error("Naver authentication failed.");
      // Optionally, navigate to a different route if authentication fails
      // navigate("/login");
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

