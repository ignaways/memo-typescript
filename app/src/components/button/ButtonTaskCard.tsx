import * as Icon from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from "../../redux/store";
import {isClosePopup} from '../../redux/features/globalState'

const ButtonTaskCard = () => {
  const dispatch = useDispatch();
  return (
    <>
    <div className='card-add-task' onClick={() => dispatch(isClosePopup(false))}>
      <div className='testAnimate'>
        <Icon.PlusCircleDotted color="white" size={25}/>
        <div style={{"marginLeft":"1em", "color":"white"}}>Add To Do</div>
      </div>
    </div>
    </>
  )
}

export default ButtonTaskCard