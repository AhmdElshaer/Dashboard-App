import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <Header />
      <Sidebar />
        <p>{message}</p>
    </>
  );
}

export default ErrorPage;