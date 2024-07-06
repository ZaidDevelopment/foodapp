import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ListOfRecipes({ foodData, setFoodId }) {
  return (
    <>
      <Container fluid>
        <Row className="gy-5 gx-5">
          {foodData.map((food) => (
            <Col key={food.id} className="col-lg-4 col-md-6 col-12">
              <Card food={food} setFoodId={setFoodId} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
