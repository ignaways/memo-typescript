import "../../assets/styles/ColorTheme.css";
import "../../assets/styles/Card.css";

interface DateProps {
  color:string,
  time:string,
  date:string,
}

const DateCard = ({ color,time, date }: DateProps) => {
  return (
    <div>
      <div style={{"fontSize":".8rem", "textAlign":"right"}}>Deadline</div>
      <div className={`${color}_revese card-color`}>{`${time} | 11 jan 2022`}</div>
    </div>
  );
}; 

export default DateCard;
