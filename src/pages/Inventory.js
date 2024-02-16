import InventoryList from "../components/InventoryList";
import Container from "react-bootstrap/Container";

export default function Inventory(props) {
  const productList = props;

  console.log(props);

  return (
    <Container>
      <h1>Inventory</h1>
      <InventoryList />
    </Container>
  );
}
