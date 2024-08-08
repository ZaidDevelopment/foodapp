import React from "react";
import PropTypes from "prop-types";

const Testimonial = ({ header, testimonial, src, personName, location }) => {
  return (
    <div className="container text-center mt-5 mb-5">
      <h2 className="fw-light" style={{ color: "#a77674" }}>
        {header}
      </h2>
      <p className="fs-6 fw-lighter fst-italic">{testimonial}</p>
      <img
        className="mx-auto d-block rounded-circle shadow-1-strong mt-5"
        style={{ width: "150px" }}
        src={src}
        alt="avatar"
      />
      <em>
        {personName}, {location}
      </em>
    </div>
  );
};

Testimonial.propTypes = {
  header: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Testimonial;
