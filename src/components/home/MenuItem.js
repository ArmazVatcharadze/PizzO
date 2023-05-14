import "./menuitem.css";
import OrderItem from "../OrderItem/OrderItem";
import { useState } from "react";

function MenuItem({ name, price, slices, image }) {
  const [order, setOrder] = useState(false);

  return (
    <>
      <div className="menu-item">
        <div className="image-holder">
          <img className="prev-menu-img" src={image} alt={name} />
        </div>

        <div className="item-context-div">
          <div className="pizza-text">
            <h2 vlaue="name">{name}</h2>
            <p>Slices: {slices}</p>
            <p>{price}</p>
          </div>
          <button onClick={() => setOrder(!order)} className="order-btn">
            Order now
          </button>
        </div>
      </div>

      {order && (
        <div className="orderitem-fullscreen">
          <OrderItem
            setOrder={setOrder}
            name={name}
            price={price}
            slices={slices}
            image={image}
          />
        </div>
      )}
    </>
  );
}

export default MenuItem;
