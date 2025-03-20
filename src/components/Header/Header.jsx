import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <header className="header header_type_home header_type_saved-news">
      <Navigation />
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__sub-title">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </header>
  );
};

export default Header;
