import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard, {action as toDoAction } from './pages/Dashboard';
// import { loader as todoLoader } from './components/ToDoList';
import RootLayout from './pages/Root';
import Settings from './pages/Settings';
import LoggIn, {action as authAction} from './pages/Authentication';
import {action as logoutAction} from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './util/auth';
import ErrorPage from './pages/Error';
import { ThemeProvider } from './Context/Context';
import Signup from './pages/Signup';
import DataEntry, {action as dataEntryAction} from './pages/DataEntry';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, id: 'root', loader: tokenLoader, children : [
    {index: true, element: <Dashboard />, errorElement: <ErrorPage/>},
    {path: 'settings', id: 'settings', element: <Settings />, loader: checkAuthLoader},
    {path: 'dataEntry', element: <DataEntry />},
    {path: 'auth', element: <LoggIn />, action: authAction},
    {path: 'auth', element: <Signup />, action: authAction},
    {path: 'logout', action: logoutAction}
  ]
}
])

function App() {
  return (
    <ThemeProvider >
      <RouterProvider router={router} />
      </ThemeProvider>
  );
}

export default App;
