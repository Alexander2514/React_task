import './TodoItem.css';

function TodoItem(props) {
  return(
    <li className="TodoItem">
      <span className={`Icon Icon-Check ${props.completed && "Icon-active"}`} >{props.completed ? "✓" : "✗"}</span>
    <p className={`Todo-item-p ${props.completed && "TodoItem-Complete"}`}>{props.text}</p>
      <span className="Icon Icon-Delete">X</span>

  
    </li>
  )
}
export{ TodoItem}