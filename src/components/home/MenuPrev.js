import Menu from "../Menu";
import MenuItem from "./MenuItem";
import "./menuitem.css";

function MenuPrev() {
  const fiveItems = Menu.slice(0, 5);

  return (
    <div className="menuprev-big">
      <div className="menuprev-title">
        <h1>Today's special</h1>
      </div>
      <div className="menuprev">
        {fiveItems.map(({ id, name, price, slices, image }) => (
          <MenuItem
            key={id}
            name={name}
            price={price}
            slices={slices}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPrev;
