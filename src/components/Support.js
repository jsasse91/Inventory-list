//importing the files I need from bootstrap for styling
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

//building the function that will show on the contact us card on the home page
export default function Support(props) {
  return (
    <Container>
      <Card>
        <Card.Header>
          <em>Valued Employee</em>, in the event you need assistance:
        </Card.Header>
        <Card.Body className="bg-warning">
          <p>Speak to your direct people leader, Or</p>
          <p>
            <a href="/contact-us">Contact Support</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
