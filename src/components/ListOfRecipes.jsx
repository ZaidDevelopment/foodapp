import React from "react";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListOfRecipes = ({ foodData, setFoodId }) => {
  return (
    <Container fluid>
      <Row className="gy-5 gx-5">
        {foodData.map((food) => (
          <Col key={food.id} lg={4} md={6} xs={12}>
            <Card food={food} setFoodId={setFoodId} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListOfRecipes;
