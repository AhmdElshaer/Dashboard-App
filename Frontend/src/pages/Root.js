import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
        <main className={classes.main}>
        <Sidebar />
          <Outlet />
        </main>
      </>
  )
}

export default RootLayout;