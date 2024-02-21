//importing the files I need mostly bootstrap and react to get use state
import Container from "react-bootstrap/Container";
import EmailUsForm from "../components/EmailUsForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Contact(props) {
  //creating the needAssist, areYouSure and confirm variables that are set initially to false, this is purely
  //because I'm extra as hell
  const [needAssist, setNeedAssist] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <Container className="mt-5">
      {/* using a ternary operator to determine if the values are true or false for the previously mentioned variables
      as there is conditional and argumentative text on this page, the final path leads to an email us form */}
      {!needAssist ? (
        <>
          <h1>Do you need assistance?</h1>
          <Button variant="dark" onClick={(e) => setNeedAssist(!needAssist)}>
            Yes
          </Button>
        </>
      ) : !areYouSure ? (
        <>
          <h1>Are you sure?</h1>
          <Button variant="warning" onClick={(e) => setAreYouSure(!areYouSure)}>
            Yes
          </Button>
        </>
      ) : !confirm ? (
        <>
          <h1>Seriously?!</h1>
          <Button variant="danger" onClick={(e) => setConfirm(!confirm)}>
            YES!
          </Button>
        </>
      ) : (
        <>
          <h1>Fine! Send your silly message</h1>
          <EmailUsForm />
        </>
      )}
    </Container>
  );
}
