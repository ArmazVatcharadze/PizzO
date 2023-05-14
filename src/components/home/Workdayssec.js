import Workdays from "../Workdays.js";
import WorkDayItem from "./Dayitem";
import "./workdays.css";

function DaysBlock() {
  return (
    <div className="workdaysdiv">
      {Workdays.map(({ id, day, open, close }) => (
        <WorkDayItem key={id} day={day} open={open} close={close} />
      ))}
    </div>
  );
}

export default DaysBlock;
