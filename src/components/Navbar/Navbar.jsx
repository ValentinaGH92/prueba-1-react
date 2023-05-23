import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import currencyTypes from "../../data/currencyTypes.json";

function NavbarApi({ indicatorTypes, setIndicatorTypes }) {
  const handlerSearch = (event) => {
    const currentSearch = event.target.value;

    if (currentSearch === "") {
      setIndicatorTypes(currencyTypes);
    } else {
      const indicatorTypesSearched = indicatorTypes.filter((indicatorType) =>
        indicatorType.includes(currentSearch)
      );
      console.log("indicatorTypesSearched: ", indicatorTypesSearched);
      setIndicatorTypes(indicatorTypesSearched);
    }
  };

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Indicador de monedas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handlerSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApi;
