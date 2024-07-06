import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegisterAccount() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <h1
        className="text-center fw-light p-4 mb-5"
        style={{ color: "#a77674" }}
      >
        Register Account
      </h1>
      <div className="row">
        <div className="col-10 col-lg-4 m-auto">
          <Container className="m-auto py-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
                onClick={() => {
                  navigate("/DemoPage");
                }}
              >
                Register
              </Button>

              <Form.Text className="text-muted">
                Already have an account?
                <Link className="text-decoration-none" to={"/login"}>
                  {" "}
                  Login here
                </Link>
              </Form.Text>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}
