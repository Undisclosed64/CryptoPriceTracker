import { BsGithub, BsTwitter, BsLinkedin, BsDiscord } from "react-icons/bs";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand-resources-container">
        <div className="brand">
          <h1> CryptoPriceTracker</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            odit hic ab tempore aliquid. Debitis ipsum sed, laborum corporis
            expedita reprehenderit magni laudantium! Fugiat impedit laborum
            veniam neque cumque reiciendis.
          </p>
        </div>
        <div className="resources-section">
          <div className="resources-container">
            <h2>Resources</h2>
            <ul>
              <li>Documentation</li>
              <li>Help center</li>
              <li>Tutorials</li>
              <li>Audit</li>
            </ul>
          </div>
          <div className="company-container">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Terms</li>
            </ul>
          </div>

          <div className="socials-container">
            <h2>Social</h2>
            <ul>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p>© 2023 Cruize Inc.</p>
      <div className="social-links">
        <div>
          <BsGithub />
        </div>
        <div>
          <BsDiscord />
        </div>
        <div>
          <BsTwitter />
        </div>
        <div>
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
