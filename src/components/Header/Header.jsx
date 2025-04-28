import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({
  onSignInClick,
  isLoggedIn,
  handleSearch,
  currentUser,
  handleLogout,
}) => {
  return (
    <header className="header header_type_home">
      <Navigation
        onSignInClick={onSignInClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className="header__container">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm handleSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
