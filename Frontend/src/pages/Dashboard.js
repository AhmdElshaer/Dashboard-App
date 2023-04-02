import { json } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap/';
import ToDoList from '../components/ToDoList';
import { useSelector, useDispatch } from 'react-redux';
import { toDoActions } from '../store/store';

function Dashboard(props) {
  const [todoValue, setTodoValue] = useState('');
  const todoItems = useSelector((state) => state.toDo.todoItems);
  const dispatch = useDispatch();

  useEffect( () => {
    async function fetchTodos() {
      const todoItems = [];
      const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json');
      if (!response.ok) {
        throw json({ message: 'Could not fetch .' });
      } else {
        const resData = await response.json();
        for (const key in resData) {
          todoItems.push({
            id: key,
            title: resData[key].title,
          })
        };
        dispatch(toDoActions.setTodos(todoItems))
      }
    };

    fetchTodos();
    
  }, [dispatch]);

  useEffect(() => {
    fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json', {
      method: 'PUT',
      body: JSON.stringify(todoItems),
    }
    )
  }, [todoItems]);

  const submitHandler = () => {
    dispatch(toDoActions.addToDo({title: todoValue}));
    setTodoValue('');
  }

  return (
    <Card className="text-center" style={{ width: '21rem' }}>
      <Card.Header className='d-flex justify-content-between' style={{fontWeight: 'bold'}}>To DO List <span className='rounded bg-dark'> Counter: {todoItems.length} </span></Card.Header>
      <Card.Body>
        <form>
          <input name='todo' type='text' id='todo' value={todoValue} onChange={(event)=> setTodoValue(event.target.value)} placeholder='Enter To Do Item'/>
          <Button onClick={submitHandler}>Add</Button>
        </form>
      </Card.Body>
      <Card.Footer className="text-muted"><ToDoList todolist={todoItems} /></Card.Footer>
    </Card>
  )
}

export default Dashboard;

// export async function action({request, params}) {
//   const data = await request.formData();
//   const todoId = params.id;
//   const method = request.method;
//   const toDoList = {
//     id: Math.random(),
//     title: data.get('todo'),
//   };

//   if (method === 'DELETE') {
//     const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json' + todoId,{
//     method: method})
//     if (!response.ok) {
//       throw json({ message: 'Could not save .' }, { status: 500 });
//     }
//     return redirect('/');
//   }
//   if(method === 'POST') {
//   const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json',{
//     method: method,
//     body: JSON.stringify(toDoList),
//   })
//   if (!response.ok) {
//     throw json({ message: 'Could not save .' }, { status: 500 });
//   }
//   return redirect('/');
// }
// return redirect('/');
// };


// async function loader() {
//   const token = getAuthToken();

//   if (!token) {
//     return redirect('/auth?mode=login');
//   }
//   const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json');
//   if (!response.ok) {
//     throw json({ message: 'Could not fetch .' });
//   } else {
//     const resData = await response.json();
      // const todoItems = [];
//     for (const key in resData) {
//       todoItems.push({
//         id: key,
//         title: resData[key].title,
//       })
//     };
//   return todoItems;
// }
// };