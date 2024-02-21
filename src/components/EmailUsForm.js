//importing the files I need from bootstrap for styling
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EmailUsForm(props) {
  //creating the function that runs on click
  const handleEmail = () => {
    //throwing a funny alert since this is a big corporation
    alert(
      "Thank you for sending us your email, it has been forward to our Deleted Emails, the time you've spent sending this message, you could have spent working!"
    );
  };

  return (
    <>
      <Row>
        <Col md="6">
          <InputGroup className="mb-3">
            <InputGroup.Text>Employee ID</InputGroup.Text>
            <Form.Control placeholder="Employee ID" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Questions, Comments Concerns?</InputGroup.Text>
            <Form.Control as="textarea" />
          </InputGroup>
          <Button onClick={(e) => handleEmail()}>Send</Button>
        </Col>
      </Row>
    </>
  );
}
