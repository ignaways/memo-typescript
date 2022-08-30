import * as Icon from 'react-bootstrap-icons';

const AddTaskCard = () => {
  return (
    <>
    <div className='card-add-task'>
      <div className='testAnimate'>
        <Icon.PlusCircleDotted color="white" size={25}/>
        <div style={{"marginLeft":"1em", "color":"white"}}>Add To Do</div>
      </div>
    </div>
    </>
  )
}

export default AddTaskCard