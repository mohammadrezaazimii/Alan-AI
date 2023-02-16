import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import YoutubeComponent from "../youtube/YoutubeComponent";
import AlanAI from "../Alan Ai/AlanAI";
import style from "./NavbarComponent.css";
const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-auto d-flex gap-4 text-right h5">
            <Link className="text-light text-decoration-none" to="/youtube">
              Youtube
            </Link>
            <Link className="text-light text-decoration-none" to="/">
              Alan AI
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/youtube" element={<YoutubeComponent />} />
        <Route path="/" element={<AlanAI />} />
      </Routes>
    </>
  );
};
export default NavbarComponent;
