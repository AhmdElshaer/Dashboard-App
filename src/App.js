import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard, {action as toDoAction } from './pages/Dashboard';
import {loader as todoLoader} from './components/ToDoList';
import RootLayout from './pages/Root';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children : [
    {path: 'dashboard', element: <Dashboard />, action: toDoAction, loader: todoLoader},
    {path: 'settings', element: <Settings />}
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
