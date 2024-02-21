//importing the files I need from bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function DaysSince() {
  return (
    <Container>
      {/* building the card that will be displayed housing a funny-ish component I put together, inspired by a funny image I saw on the interwebs */}
      <Card>
        <Card.Header>
          Congrats <em>Valued Employee</em> we have worked:
        </Card.Header>
        <Card.Body className="bg-success">
          <p>
            <strong>3</strong> Days Since Last Recordable Accident
          </p>
          <p>
            <strong>104</strong> Hours since Last OSHA Recordable
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
