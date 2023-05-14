import "./subhead.css";

function WorkDayItem({ day, open, close }) {
  return (
    <div className="day-item">
      <h3>{day}</h3>
      <p>open: {open}</p>
      <p>close: {close}</p>
    </div>
  );
}

export default WorkDayItem;
