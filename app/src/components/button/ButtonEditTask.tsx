import * as Icon from "react-bootstrap-icons";

const ButtonEditTask = () => {
  return(
    <div style={{"display":"flex", "alignItems":"center"}}>
       <Icon.PencilSquare size={18}/>
       <div style={{"fontSize":".8em","fontWeight":"500",marginLeft:".3em"}}>edit</div>
    </div>
  )
}

export default ButtonEditTask