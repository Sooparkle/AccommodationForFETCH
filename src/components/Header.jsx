import { NavLink } from "react-router-dom";
import React from 'react';
import { ReactComponent as Logo } from "../assets/logo.svg"
import { ReactComponent as Search } from "../assets/search.svg"
import { ReactComponent as Mypage } from "../assets/profile.svg"
import { useDispatch } from "react-redux";
import { searchDataSucceess } from "../store/resultSlice";

export const Header = () =>{
  const dispatch = useDispatch();


  const handleAlert= ()=>{
    return  window.alert("준비중입니다.");
    
  }
return(
  <>
    <div className="header-wrap">

        <ul>
          <li className="header-seach">
            <NavLink 
              onClick={()=>dispatch(searchDataSucceess([]))}
              to="/" >
              <Logo 
              />
            </NavLink>
          </li>
          <li className="header-mypage">
            <NavLink to="/mypage">
              <Mypage />
              </NavLink>
          </li>
        </ul>
    </div>
  </>
)
}