import { json, redirect } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { getAuthToken } from "../util/auth";

function ToDoList({todolist}) {

  return (
    <div style={{'textAlign': 'center'}}>
      {!todolist && <h1>Write some to do list</h1>}
      {todolist && <ul>
        {todolist.map((todoItem) => (<li key={todoItem.key}>
          <Card border="primary" style={{ width: '18rem', marginTop: '1rem' }}>
          <Card.Body><Card.Title className="d-flex justify-content-center align-items-center gap-2">
          <input type="checkbox" key={todoItem.key} value={todoItem.title}/>
          <p className='m-0'>{todoItem.title}</p>
        </Card.Title>
        </Card.Body>
      </Card>
        </li>))}
        </ul>}
    </div>
  )
}

export default ToDoList;

export async function loader({ request, params }) {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth?mode=login');
  }
  const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json');
  if (!response.ok) {
    throw json({ message: 'Could not fetch .' });
  } else {
    const resData = await response.json();
    const todolist = [];
    for (const key in resData) {
      todolist.push({
        key: key,
        title: resData[key].title,
      })
    }
  return todolist;
}

};