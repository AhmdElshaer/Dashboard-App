import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function Header () {
  const token = useRouteLoaderData('root');
  const { toggle } = useContext(ThemeContext);

  return (
    <header 
    className='d-flex justify-content-between align-items-center m-auto px-4 py-2' 
    style={toggle ? {backgroundColor: 'var(--dark-color)'} : {backgroundColor: 'var(--light-color)'}}
    >
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
          <p></p>
          <Form action='/logout' method='post'>
          <Button type='submit'>Logout</Button>
          </Form>
            </li>}
          </ul>
    </header>
  )
}

export default Header;