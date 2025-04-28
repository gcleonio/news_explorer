import { Link } from "react-router-dom";
import githhubIcon from "../../assets/github.png";
import facebookIcon from "../../assets/facebook.svg";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">© 2025 Supersite, Powered by News API</p>
      <div className="footer__container">
        <div className="footer__container-links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/gleonio"
            target="_blank"
            rel="noopener noreferrer"
          >
            G. Leonio
          </a>
        </div>
        <div className="footer__container-icons">
          <a
            className="footer__icon-link"
            href="https://github.com/gcleonio/news_explorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githhubIcon} alt="github link"></img>
          </a>
          <a
            className="footer__icon-link"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="facebook-icon"
          >
            <img src={facebookIcon} alt="facebook"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
