import { useRouteLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar () {
    const token = useRouteLoaderData('root');

  return (
    <aside className='p-4'>
      <ul className='mt-5 gap-4 d-flex flex-column'>
        <li>
          {token && <NavLink to='/'>Dashboard</NavLink>}
          {!token && <NavLink to='/auth?mode=login'>Dashboard</NavLink>}
        </li>
        <li>
          <NavLink to='settings'>Settings</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;