import "./Navigation.css";

const Navigation = ({ onSignInClick }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <ul className="nav__links">
        <button className="nav__links_home">Home</button>
        <button className="nav__links_signin" onClick={onSignInClick}>
          Sign In
        </button>
      </ul>
      <button className="nav__menu-btn"></button>
    </nav>
  );
};

export default Navigation;
