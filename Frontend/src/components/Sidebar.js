import { NavLink } from "react-router-dom";

function Sidebar () {
  return (
    <aside className='p-4'>
      <ul className='mt-5 gap-4 d-flex flex-column'>
        <li>
          <NavLink to='dashboard'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='settings'>Settings</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;