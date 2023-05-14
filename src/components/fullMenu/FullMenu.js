import MenuItem from "../home/MenuItem";
import Menu from "../Menu";

function FullMenu() {
  return (
    <div className="menuprev-big">
      <div className="menuprev-title">
        <h1>Menu</h1>
      </div>
      <div className="menuprev">
        {Menu.map(({ id, name, price, slices, image }) => (
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

export default FullMenu;
