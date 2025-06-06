import { useLocation, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.png";
import logoutIconHome from "../../assets/logout-homepage.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navigation = ({ onSignInClick, handleLogout }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSavedNewsPage = location.pathname === "/saved-news";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  console.log("isLoggedIn in Navigation", isLoggedIn);
  console.log("currentUser", currentUser, typeof currentUser);

  return (
    <nav className={`nav ${isSavedNewsPage ? "nav_saved-news" : ""}`}>
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
              onClick={handleLogout}
              className={`nav__link_logout-btn ${
                isHomePage && isLoggedIn ? "nav__link_logout-btn_home" : ""
              }`}
            >
              {currentUser?.name || "User"}
              <img
                src={isLoggedIn && isHomePage ? logoutIconHome : logoutIcon}
                alt="Logout Icon"
                className="nav__logout-icon"
              />
            </button>
          </div>
        )}
      </ul>
      {isHomePage && (
        <button className="nav__menu-btn" onClick={toggleMobileMenu}></button>
      )}
      {isLoggedIn && isSavedNewsPage && (
        <button
          className="nav__menu-btn-saved-news"
          onClick={toggleMobileMenu}
        ></button>
      )}
      <MobileMenu
        onSignInClick={onSignInClick}
        handleLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isHomePage={isHomePage}
        isSavedNewsPage={isSavedNewsPage}
      />
    </nav>
  );
};

export default Navigation;
