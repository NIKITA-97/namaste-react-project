import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";


export const Header = () => {

  const [btnNameReact, setbtnNameReact ] = useState ("Login");
    return (
      <div className="res-header">
        <img
          className="res-logo-logo"
          src={LOGO_URL}
        />
        <div className="res-nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          
          </ul>
        </div>
        <img
          className="res-cart-img"
          src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
        />
          <button className="login" onClick={ () => {btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
      </div>
    );
  };
  export default Header;