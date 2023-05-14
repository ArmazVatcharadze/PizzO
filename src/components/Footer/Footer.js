import "./footer.css";
import Pizzaimg from "../assets/icons8-pizza-48.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={Pizzaimg} alt="pizza" />
        <h1>Order with love from PizzO</h1>
        <p>pizzobestpizza@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
