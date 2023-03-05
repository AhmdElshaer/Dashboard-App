import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Header () {
  const token = useRouteLoaderData('root');

  return (
    <header className='d-flex justify-content-between m-auto ' style={{width: '60rem', padding: '2rem'}}>
      <div>
        <img style={{width: '3rem', height: '3rem'}} src={require('../images/icons8-dashboard-layout-100.png')} alt='logo'/>
        </div>
        <ul>
          {!token &&
          <li>
            <NavLink
              to="/auth?mode=login"
            >
              <Button>
              Log In
              </Button>
            </NavLink>
          </li>
          }
        {token && <li>
              <Form action='/logout' method='post'>
                <Button type='submit'>Logout</Button>
              </Form>
            </li>}
          </ul>
      {/* <Button ><NavLink to={'login'}>Log In</NavLink></Button> */}
    </header>
  )
}

export default Header;