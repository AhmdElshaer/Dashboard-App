import classes from './Header.module.css';
// import { Button } from 'react-bootstrap';
import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';

function Header () {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img className={classes.img} src={require('../images/icons8-dashboard-layout-100.png')} alt='logo'/>
        </div>
        <ul>
          {!token &&
          <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Log In
            </NavLink>
          </li>
          }
        {token && <li>
              <Form action='/logout' method='post'>
                <button>Logout</button>
              </Form>
            </li>}
          </ul>
      {/* <Button ><NavLink to={'login'}>Log In</NavLink></Button> */}
    </header>
  )
}

export default Header;