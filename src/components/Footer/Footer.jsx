import FacebookIcon from "../Icons/FacebookIcon/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon/InstagramIcon";
import logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer container-fluid mt-5 bg-dark">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center mt-2">
            <Link to="/">
              <img src={logo} alt="ng games" className="footer__logo" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center text-white">
            <h3 className="footer__texto">
              Nuestras <b>Redes:</b>
            </h3>
            <div className="redes__sociales">
              <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                {" "}
                <InstagramIcon />{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
