import { Link } from "react-router-dom";

export const Header = () =>{

return(
  <>
    <div className="header-wrap">
      <div className="logo">
        <Link to="/" >Logo</Link>
      </div>

      <nav >
        <ul>
          <li>
            <Link to="/login" >Login</Link>
          </li>
        </ul>
      </nav>

    </div>
  </>
)
}