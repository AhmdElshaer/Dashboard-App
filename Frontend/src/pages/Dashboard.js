
import { Form, json, redirect, useLoaderData } from 'react-router-dom';
import { Card, Button, Container} from 'react-bootstrap/';
import ToDoList from '../components/ToDoList';
import classes from './Dashboard.module.css'

function Dashboard() {
  const data = useLoaderData();
  return (
    <Container>
    <Card className="text-center" style={{ width: '21rem' }} centered>
      <Card.Header>To DO List</Card.Header>
      <Card.Body>
        <Form method='post'>
          <input name='todo' type='text' id='todo' placeholder='Enter To Do Item'/>
          <button><Button>Add</Button></button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted"><ToDoList todolist={data} /></Card.Footer>
    </Card>
    </Container>
    // <Container className={classes.form}>
    //   <Form method='post'>
    //     <input name='todo' type='text' id='todo' placeholder='Enter To Do Item'/>
    //     <button>Add</button>
    //   </Form>
    //   <ToDoList todolist={data} />
    // </Container>
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