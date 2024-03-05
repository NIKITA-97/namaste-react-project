import { LOGO_URL } from "../../utils/constant";


export const Header = () => {
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
      </div>
    );
  };
  export default Header;