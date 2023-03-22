import {Card, Button} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { toDoActions } from '../store/store';

function TodoItem(props) {
  const { id, title } =props.todoItem;

  const dispatch = useDispatch();

  function deleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      dispatch(toDoActions.removeTodo(id))
    }
  }
  
  return (
    <li key={id}>
          <Card border="primary" style={{ width: '18rem', marginTop: '1rem' }}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center align-items-center gap-2">
              <input type="checkbox" key={id} id={id} value={title}/>
              <p className='m-0'>{title}</p>
              <Button onClick={deleteHandler}>Remove</Button>
        </Card.Title>
        </Card.Body>
      </Card>
        </li>
  )
}

export default TodoItem;