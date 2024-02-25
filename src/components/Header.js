import { Link } from "react-router-dom";
import React from 'react';

export const Header = () =>{

return(
  <>
    <div className="header-wrap">

        <ul>
          <li className="login">
            <Link to="/login" >Login</Link>
          </li>
          <li className="logo">
            <Link to="/" >Logo</Link>
          </li>
          <li className="mypage">
            <Link to="/mypage">My page</Link>
          </li>
        </ul>
    </div>
  </>
)
}