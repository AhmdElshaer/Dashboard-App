import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function RootLayout() {
  const { toggle } = useContext(ThemeContext);

  const root = document.getElementById('root');

  root.classList = `container-fluid position-relative p-0 ${toggle ? 'bg-dark' : 'bg-light'}`;

  return (
    <>
        <Header />
        <main className="d-flex justify-content-start m-auto">
        <Sidebar />
        <div className='container d-flex align-items-center justify-content-center' style={{minHeight: '80vh'}}>
          <Outlet />
          </div>
        </main>
        </>
  )
}

export default RootLayout;

