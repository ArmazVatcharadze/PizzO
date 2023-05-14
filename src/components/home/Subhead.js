import "./subhead.css";

function Subhead() {
  return (
    <div className="subhead">
      <div className="title">
        <h1>PizzO</h1>
        <p>Taste the best pizza in the city</p>
        <button className="sub-view-menu">View Menu</button>
      </div>
      <img
        className="salad-image"
        src="https://media.istockphoto.com/id/1345972841/photo/pizzeria-napoletana-fresh-baking.jpg?b=1&s=170667a&w=0&k=20&c=_NON8kDE4mrRt-vYKigy7MOB1hNYCA8RUoVzS_yQuXk="
        alt="salad"
      />
    </div>
  );
}

export default Subhead;
