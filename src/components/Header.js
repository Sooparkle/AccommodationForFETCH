import { NavLink } from "react-router-dom";
import React from 'react';

export const Header = () =>{

return(
  <>
    <div className="header-wrap">

        <ul>
          <li className="login">
            <NavLink to="/login" >Login</NavLink>
          </li>
          <li className="logo">
            <NavLink to="/" >Logo</NavLink>
          </li>
          <li className="mypage">
            <NavLink to="/mypage">My page</NavLink>
          </li>
        </ul>
    </div>
  </>
)
}