import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard, {action as toDoAction } from './pages/Dashboard';
import {loader as todoLoader} from './components/ToDoList';
import RootLayout from './pages/Root';
import Settings from './pages/Settings';
import LoggIn, {action as authAction} from './pages/Authentication';
import {action as logoutAction} from './pages/Logout';
import { tokenLoader } from './util/auth';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, id: 'root', loader: tokenLoader, children : [
    {path: 'dashboard', element: <Dashboard />, errorElement: <ErrorPage/>, action: toDoAction, loader: todoLoader},
    {path: 'settings', element: <Settings />},
    {path: 'auth', element: <LoggIn />, action: authAction},
    {path: 'logout', action: logoutAction}
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
