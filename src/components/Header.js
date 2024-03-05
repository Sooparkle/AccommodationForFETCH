import { NavLink } from "react-router-dom";
import React from 'react';

export const Header = () =>{

return(
  <>
    <div className="header-wrap">

        <ul>
          <li className="header-logo">
            <NavLink to="/" >logo</NavLink>
          </li>
          <li className="header-seach">
            <NavLink to="/search" >Search</NavLink>
          </li>
          <li className="header-mypage">
            <NavLink to="/mypage">My page</NavLink>
          </li>
        </ul>
    </div>
  </>
)
}