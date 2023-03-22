import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getAuthToken } from '../util/auth';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const token = getAuthToken();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';


  return (
    <>
      {token && <h1>You are Already logged in</h1>}
      {!token && <Form method="post" style={{maxWidth: "40rem", margin: '2rem auto' }}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (<ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
          </ul>)}
          {data && data.message && <p>{data.message}</p>}
          {!isLogin &&
          <p>
          <label className='d-block w-100' htmlFor="username">User Name</label>
          <input className='d-block w-100 p-2' id="username" type="text" name="username" required />
        </p>
        }
        <p>
          <label className='d-block w-100' htmlFor="email">Email</label>
          <input className='d-block w-100 p-2' id="email" type="email" name="email" required />
        </p>
        <p>
          <label className='d-block w-100' htmlFor="image">Password</label>
          <input className='d-block w-100 p-2' id="password" type="password" name="password" required />
        </p>
        <div className='d-flex gap-2 justify-content-end align-items-center'>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Is Submitting' : 'Save'}</Button>
        </div>
      </Form>}
    </>
  );
}

export default AuthForm;
