//importing the files I need mainly bootstrap and a couple components that make up the page.
import Container from "react-bootstrap/Container";
import EmployeeIntro from "../components/EmployeeIntro";
import DaysSince from "../components/DaysSince";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Support from "../components/Support";

export default function Home(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="4">
          <EmployeeIntro />
        </Col>
        <Col md="3"></Col>
        <Col md="5">
          <DaysSince />
          <br></br>
          <Support />
        </Col>
      </Row>
    </Container>
  );
}
