import { useLocation, Link } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.png";
import logoutIconHome from "../../assets/logout-homepage.png";

const Navigation = ({ onSignInClick, isLoggedIn }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <nav className={`nav ${isSavedNewsPage ? "nav__saved-news" : ""}`}>
      <Link
        to="/"
        className={`nav__logo ${isSavedNewsPage ? "nav__logo_saved-news" : ""}`}
      >
        NewsExplorer
      </Link>
      <ul className="nav__links">
        <Link
          to="/"
          className={`nav__link_home ${
            isSavedNewsPage ? "nav__link_home-saved-news" : ""
          }`}
        >
          Home
        </Link>
        {!isLoggedIn && isHomePage ? (
          <button className="nav__link_signin-btn" onClick={onSignInClick}>
            Sign In
          </button>
        ) : (
          <div className="nav__links_loggedin">
            <Link
              to="/saved-news"
              className={`nav__link_saved-articles ${
                isLoggedIn && isHomePage ? "nav__link_saved-articles_home" : ""
              }`}
            >
              Saved articles
            </Link>
            <button
              className={`nav__link_logout-btn ${
                isHomePage && isLoggedIn ? "nav__link_logout-btn_home" : ""
              }`}
            >
              Elise
              <img
                src={isLoggedIn && isHomePage ? logoutIconHome : logoutIcon}
                alt="Logout Icon"
                className="nav__logout-icon"
              />
            </button>
          </div>
        )}
      </ul>
      <button className="nav__menu-btn"></button>
    </nav>
  );
};

export default Navigation;
