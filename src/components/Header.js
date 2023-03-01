import classes from './Header.module.css';

function Header () {
  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img className={classes.img} src={require('../images/icons8-dashboard-layout-100.png')} alt='logo'/>
        </div>
      <button className={classes.logo}>Logout</button>
    </header>
  )
}

export default Header;