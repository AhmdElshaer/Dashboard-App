import { useRouteLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function Sidebar () {
    const token = useRouteLoaderData('root');
    const { toggle } = useContext(ThemeContext);

  return (
    <aside className='sidebar px-4' style={toggle ? {backgroundColor: 'var(--dark-color)'} : {backgroundColor: 'var(--light-color)'}}>
      <ul className='mt-5 gap-4 d-flex flex-column'>
        <li>
          {token && <NavLink to='/'>Dashboard</NavLink>}
          {!token && <NavLink to='/auth?mode=login'>Dashboard</NavLink>}
        </li>
        <li>
          <NavLink to='dataEntry'>Data Entry</NavLink>
        </li>
        <li>
          <NavLink to='settings'>Settings</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;