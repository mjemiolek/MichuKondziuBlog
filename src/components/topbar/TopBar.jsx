import { Link } from "react-router-dom";
import img from "../../images/yellow-button.png";
import "./topbar.css";

export default function TopBar() {
  const scroolTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/" onClick={scroolTop}>
              BLOG
            </Link>
          </li>
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/about" onClick={scroolTop}>
              O NAS
            </Link>
          </li>
          <li className="topListItem hover-underline-animation">
            <Link className="link" to="/contact" onClick={scroolTop}>
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
