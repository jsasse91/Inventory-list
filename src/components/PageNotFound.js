//importing the files I need for styling from bootstrap
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//building the function that will serve as a page not found, this will trigger if the user hits a page not defined in the routing
export default function PageNotFound(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6">
          <Card>
            <Container className="m-3">
              <h1>Page not found</h1>
              <p>
                The page you are looking for has either moved, or does not
                exist. Please reach out to our support staff by{" "}
                <a href="/contact-us">Contacting Us</a>.
              </p>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
