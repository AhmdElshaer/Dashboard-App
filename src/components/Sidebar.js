import { NavLink } from "react-router-dom";
import classes from './Sidebar.module.css'

function Sidebar () {
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.list}>
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