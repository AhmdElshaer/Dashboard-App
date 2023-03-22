import { json, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import TodoItem from "./TodoItem";

function ToDoList(props) {
  const { todolist } = props;

  return (
    <div style={{'textAlign': 'center'}}>
      {todolist.length === 0 && <h3>Write some to do list</h3>}
      {todolist && <ul>
        {todolist.map((todoItem) => (<TodoItem 
          key={todoItem.id}
          todoItem={{
            id: todoItem.id,
            title: todoItem.title
          }}
          />))}
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