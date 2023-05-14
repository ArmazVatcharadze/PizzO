import { useState } from "react";
import "./header.css";
import Pizzaimg from "../assets/icons8-pizza-48.png";
import Menu from "../assets/icons8-menu-50.png";
import { Link } from "react-router-dom";

function Header() {
  const [slider, setSlider] = useState(true);

  function showMenu() {
    setSlider(!slider);
  }

  return (
    <header className="header">
      <img
        className={slider ? "pizza-logo show" : "pizza-logo hidden"}
        src={Pizzaimg}
        alt="pizza"
      />

      <nav className={slider ? "hidden" : "show"}>
        <ul>
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/menu">
            <li className="nav-link">Menu</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact</li>
          </Link>
        </ul>
      </nav>

      <img
        onClick={showMenu}
        className="menu-icon"
        src={Menu}
        alt="hamburgermenu"
      />
    </header>
  );
}

export default Header;
