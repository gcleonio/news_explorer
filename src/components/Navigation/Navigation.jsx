import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <ul className="nav__links">
        <button>Home</button>
        <button>Sign In</button>
      </ul>
    </nav>
  );
};

export default Navigation;
