import { NavLink } from "react-router-dom";
import { ReactComponent as  Logo }  from "../assets/Logo.svg";
import { ReactComponent as Search }  from "../assets/search.svg";
import  { ReactComponent as MyProfile }  from "../assets/profile.svg";
import React, { useState } from "react";

export const Header = () => {
  const [ active, setActive ] = useState(false);
  return (
    <>
      <div className="header-wrap">
        <ul>
          <li>
            <NavLink to="/search">
              <Search  
                fill="#fff" 
                stroke="#999"
                className="header-search"
                // onClick={()=>{setActive(!active)}}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Logo 
                fill="#fff" 
                stroke="#999"
                // onClick={()=>{setActive(!active)}}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/mypage">
              <MyProfile 
                fill="#fff" 
                stroke="#999"
                className="header-myprofile"
                />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
