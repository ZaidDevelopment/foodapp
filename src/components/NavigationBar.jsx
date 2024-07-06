import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchRecipes from "./SearchRecipes";

export default function NavigationBar({ setFoodData }) {
  return (
    <div className="w-100">
      <div
        style={{
          maxWidth: "1536px",
          margin: "auto",
        }}
      >
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src="./src/assets/logo-80.png" width="100px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Recipes</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="https://www.hellofresh.co.uk/">
                    Hello Fresh
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.jamieoliver.com/recipes/">
                    Jamie Oliver
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <SearchRecipes setFoodData={setFoodData} />
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
