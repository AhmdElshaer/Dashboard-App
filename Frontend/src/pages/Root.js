import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {Container} from 'react-bootstrap/';
import { useContext } from "react";
import Context from "../components/Context";

function RootLayout() {
  const modeDark = useContext(Context);
  console.log(`is the mode dark? ${modeDark.Dark}`);

  return (
    <Container className={modeDark.Dark ? 'bg-dark' : 'bg-light'}>
      <header>
        <Header />
      </header>
        <main className="d-flex justify-content-start m-auto">
        <Sidebar />
        <Container className={`d-flex align-items-center justify-content-center ${modeDark.Dark ? 'bg-dark' : 'bg-light'}`}>
          <Outlet />
          </Container>
        </main>
      </Container>
  )
}

export default RootLayout;