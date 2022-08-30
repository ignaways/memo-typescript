
import '../../assets/styles/Card.css'
import { useSelector } from "react-redux";
import type {RootState} from '../../redux/store'

const MutipleCard = () => {
  const colorMode = useSelector((state: RootState) => state.mode.colorMode)

  return (
    <div className={`${colorMode ? "card-task__day-mode" : "card-task__night-mode"}`}>
      masuk card
    </div>
  )
}

export default MutipleCard