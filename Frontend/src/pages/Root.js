import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {Container} from 'react-bootstrap/';
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function RootLayout() {
  const { toggle } = useContext(ThemeContext);
  document.getElementById('root').classList = `${toggle ? 'bg-dark' : 'bg-light'}`;

  return (
    <Container style={{ minHeight: '100vh'}}>
      <header>
        <Header />
      </header>
        <main className="d-flex justify-content-start m-auto">
        <Sidebar />
        <Container className={`d-flex align-items-center justify-content-center ${toggle ? 'bg-dark' : 'bg-light'}`}>
          <Outlet />
          </Container>
        </main>
      </Container>
  )
}

export default RootLayout;