import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <ul className="nav__links">
        <button className="nav__links_home">Home</button>
        <button className="nav__links_signin">Sign In</button>
      </ul>
    </nav>
  );
};

export default Navigation;
