import { Form, json, redirect, useLoaderData } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap/';
import ToDoList from '../components/ToDoList';

function Dashboard() {
  
  const data = useLoaderData();

  return (
    <Card className="text-center" style={{ width: '21rem' }}>
      <Card.Header>To DO List</Card.Header>
      <Card.Body>
        <Form method='post'>
          <input name='todo' type='text' id='todo' placeholder='Enter To Do Item'/>
          <Button type="submit">Add</Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted"><ToDoList todolist={data} /></Card.Footer>
    </Card>
  )
}


export default Dashboard;

export async function action({request, params}) {
  const data = await request.formData();
  const toDoList = {
    key: data.get('todo'),
    title: data.get('todo'),
  };
  const response = await fetch('https://reacthttp-50bcb-default-rtdb.firebaseio.com/todolist.json',{
    method: 'POST',
    body: JSON.stringify(toDoList),
  })
  if (!response.ok) {
    throw json({ message: 'Could not save .' }, { status: 500 });
  }
  return redirect('/dashboard');
};