import { json } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ToDoList({todolist}) {
  return (
    <div style={{'textAlign': 'center'}}>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> {!todolist && <h1>Write some to do list</h1>}
      {todolist && <ul>
        {todolist.map((todoItem) => (<li key={todoItem.key}>
          <input type="checkbox" key={todoItem.key} value={todoItem.title}/>
          <p>{todoItem.title}</p>
        </li>))}
        </ul>}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ToDoList;

export async function loader({ request, params }) {

  const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json');
  if (!response.ok) {
    throw json({ message: 'Could not fetch .' });
  } else {
    const resData = await response.json();
    console.log(resData);
    const todolist = [];
    for (const key in resData) {
      todolist.push({
        key: key,
        title: resData[key].title,
      })
    }
    console.log(todolist);
  return todolist;
}

};