
import { Form, json, redirect, useLoaderData } from 'react-router-dom';
import ToDoList from '../components/ToDoList';
import classes from './Dashboard.module.css'

function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className={classes.section}>
      <Form method='post' className={classes.form}>
        <label htmlFor='todo'>To Do item</label>
        <input name='todo' type='text' id='todo' placeholder='Enter To Do Item'/>
        <button>Add</button>
      </Form>
      <ToDoList todolist={data} />
    </section>
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