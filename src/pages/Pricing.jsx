import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();
  // Dummy data. This should be coming from a database.
  const check = <i className="fa-solid fa-check"></i>;
  const compareTableData = [
    {
      id: 0,
      th: "Public",
      td1: check,
      td2: check,
      td3: check
    },
    {
      id: 1,
      th: "Private",
      td1: check,
      td2: check,
      td3: check
    },
    {
      id: 2,
      th: "Permissions",
      td1: "",
      td2: check,
      td3: check
    },
    {
      id: 3,
      th: "Secret Recipes",
      td1: "",
      td2: check,
      td3: check
    },
    {
      id: 4,
      th: "Exclusive Previews",
      td1: "",
      td2: "",
      td3: check
    },
    {
      id: 5,
      th: "Extra Security",
      td1: "",
      td2: "",
      td3: check
    },
  ];

  return (
    <>
      <header>
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <h1 className="fw-light p-4" style={{ color: "#a77674" }}>Pricing</h1>
          <p className="fs-6 text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </header>

      <Container className="py-4" style={{ maxWidth: "860px" }}>
        {/* START PRICING CARD */}
        <Container>
          <Row>
            <Col lg={true}>
              <Card className="text-center shadow-sm">
                <Card.Header as="h5" className="my-0 fw-normal py-3">Free</Card.Header>
                <Card.Body>
                  <Card.Title><h1>$0<small className="text-body-secondary fw-light">/mo</small></h1></Card.Title>
                  <ul className="list-unstyled mt-3 mb-4 text-secondary">
                    <li>1 request/s</li>
                    <li>150 points/day</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Button
                    variant="outline-success"
                    size="lg"
                    className="w-100 fs-6"
                    onClick={() => {
                      navigate("/registeraccount");
                    }}>
                    Sign up for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className="text-center shadow-sm">
                <Card.Header as="h5" className="my-0 fw-normal py-3">Pro</Card.Header>
                <Card.Body>
                  <Card.Title><h1>$15<small className="text-body-secondary fw-light">/mo</small></h1></Card.Title>
                  <ul className="list-unstyled mt-3 mb-4 text-secondary">
                    <li>20 requests/s</li>
                    <li>10,000 points/day</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Button
                    variant="success"
                    size="lg"
                    className="w-100 fs-6"
                    onClick={() => {
                      navigate("/registeraccount");
                    }}>
                    Get started
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className="text-center shadow-sm">
                <Card.Header as="h5" className="my-0 fw-normal py-3 text-bg-success border-success">Enterprise</Card.Header>
                <Card.Body>
                  <Card.Title><h1>$29<small className="text-body-secondary fw-light">/mo</small></h1></Card.Title>
                  <ul className="list-unstyled mt-3 mb-4 text-secondary">
                    <li>500 requests/s</li>
                    <li>Unlimited points/day</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Button
                    variant="success"
                    size="lg"
                    className="w-100 fs-6"
                    onClick={() => {
                      navigate("/registeraccount");
                    }}>
                    Get started
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* END PRICING CARD */}
        {/* ----------------------------------------------------------------------- */}

        <h2 className="display-6 text-center mt-5 mb-5">Compare plans</h2>

        {/* START COMPARE TABLE */}
        <Table striped hover className="text-center">
          <thead>
            <tr>
              <th></th>
              <th>Free</th>
              <th>Pro</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {compareTableData.map((tableData) => (
              <tr key={tableData.id}>
                <th className="text-start">{tableData.th}</th>
                <td>{tableData.td1}</td>
                <td>{tableData.td2}</td>
                <td>{tableData.td3}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* END COMPARE TABLE */}
      </Container>
    </>
  )
}
