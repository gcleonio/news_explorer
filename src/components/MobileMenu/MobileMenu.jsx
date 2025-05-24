import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutIcon from "../../assets/logout.png";

const MobileMenu = ({
  onSignInClick,
  // isLoggedIn,
  // currentUser,
  handleLogout,
  isMobileMenuOpen,
  toggleMobileMenu,
  isHomePage,
  isSavedNewsPage,
}) => {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <div
      className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu_open" : ""}`}
    >
      <button
        className="mobile-menu__close-btn"
        onClick={toggleMobileMenu}
      ></button>
      {isLoggedIn ? (
        <ul className="mobile-menu__links">
          NewsExplorer
          <li>
            <Link
              to="/"
              className={`mobile-menu__link ${
                isHomePage ? "mobile-menu__link_home" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/saved-news"
              className={`mobile-menu__link ${
                isSavedNewsPage ? "mobile-menu__link_saved-news" : ""
              }`}
            >
              Saved Articles
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="mobile-menu__links">
          NewsExplorer
          <li>
            <Link
              to="/"
              className={`mobile-menu__link ${
                isHomePage ? "mobile-menu__link_home" : ""
              }`}
            >
              Home
            </Link>
          </li>
        </ul>
      )}
      {isLoggedIn ? (
        <button className="mobile-menu__logout-btn" onClick={handleLogout}>
          {currentUser || "User"}
          <img
            src={logoutIcon}
            alt="Logout Icon"
            className="mobile-menu__logout-icon"
          />
        </button>
      ) : (
        <button className="mobile-menu__signin-btn" onClick={onSignInClick}>
          Sign in
        </button>
      )}
    </div>
  );
};

export default MobileMenu;
