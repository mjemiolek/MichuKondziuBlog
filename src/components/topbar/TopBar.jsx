import { Link } from "react-router-dom";
import img from "../../images/yellow-button.png";
import "./topbar.css";

export default function TopBar() {

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/">
              BLOG
            </Link>
          </li>
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/about">
              O NAS
            </Link>
          </li>
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/contact">
              KONTAKT
            </Link>
          </li>
        </ul>
        <div className="sponsor">
          <a href="https://www.buymeacoffee.com/2000mjX" target="_blank">
            <img className="coffeImg" src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
