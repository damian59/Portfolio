import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import CV from "../assets/CV_DM.pdf";
import "../styles/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1">
          <Link to={CV} target="_blank" download className="item1">
            Download CV <FiDownload />
          </Link>
        </div>

        <div className="item2">
          <p>Copyright © {year} - All right reserved.</p>
        </div>
        <Link to="https://github.com/damian59?tab=repositories" className="item3">
          <FaGithub />
        </Link>

        <Link to="https://www.linkedin.com/in/damian-almanza" className="item4">
          <FaLinkedinIn />
        </Link>
        <Link to="https://wa.me/+5491137751348" className="item5">
          <FaWhatsapp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
