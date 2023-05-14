import "./orderitem.css";

function OrderItem({ name, price, slices, image, setOrder }) {
  return (
    <div className="order-background">
      <div className="order-modal">
        <div className="order-info">
          <button className="close" onClick={() => setOrder(false)}>
            X
          </button>
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{price}</p>
          <p>Slices: {slices}</p>
        </div>

        <div className="order-form">
          <form>
            <label>Name</label>
            <input type="text" />

            <label>Number</label>
            <input type="number" />

            <label htmlFor="option1">
              <input type="radio" id="option1" name="option" value="option1" />
              Pay with cash
            </label>

            <label htmlFor="option2">
              <input type="radio" id="option2" name="option" value="option2" />
              Pay with card
            </label>
          </form>
          <div className="order-cancel">
            <button className="cancel" onClick={() => setOrder(false)}>
              Cancel
            </button>
            <button className="order">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
