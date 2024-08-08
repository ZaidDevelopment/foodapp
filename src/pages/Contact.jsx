import Accordion from "react-bootstrap/Accordion";

const Contact = () => {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-light p-4" style={{ color: "#a77674" }}>
          Contact Us
        </h1>
        <h1 className="text-center p-5 text-success ">
          <strong>FAQ</strong>
        </h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Question Item #1</Accordion.Header>
            <Accordion.Body>{sampleText}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Question Item #2</Accordion.Header>
            <Accordion.Body>{sampleText}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Question Item #3</Accordion.Header>
            <Accordion.Body>{sampleText}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Question Item #4</Accordion.Header>
            <Accordion.Body>{sampleText}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Question Item #5</Accordion.Header>
            <Accordion.Body>{sampleText}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="text-center m-5">
          <h4>Mail</h4>
          <p>
            Food, Inc.
            <br />
            2000 Westwood Blvd,
            <br />
            Los Angeles, CA 90025, USA
            <br />
            info@food.com
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8908523713485!2d-118.4364557239998!3d34.04667081802407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb9c0816f251%3A0x5fdc8045fb7ded21!2s2000%20Westwood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090025%2C%20USA!5e0!3m2!1sen!2suk!4v1705686835980!5m2!1sen!2suk"
          width="80%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="m-4 d-block m-auto"
        ></iframe>
      </div>
    </>
  );
};
export default Contact;
