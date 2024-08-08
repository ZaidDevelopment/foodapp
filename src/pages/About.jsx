import Testimonial from "../components/Testimonial";
import Carousel from "react-bootstrap/Carousel";
//assets
import headerVideo from "../assets/woman_with_headdresses.mp4";
import testimonialsImg0 from "../assets/pretty-smiling.jpg";
import testimonialsImg1 from "../assets/portrait-blonde-bearded.jpg";
import testimonialsImg2 from "../assets/young-bearded-man.jpg";
import marketingImg0 from "../assets/man-holding-plate.jpg";
import marketingImg1 from "../assets/top-view-chocolate-roll.jpg";
import marketingImg2 from "../assets/top-view-cake-slices.jpg";

const About = () => {
  // Dummy data. This should be coming from a database.
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const testimonials = [
    {
      id: 0,
      header: "Delicious Recipes",
      testimonial: `" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."`,
      src: testimonialsImg0,
      personName: "Jane",
      location: "New York",
    },
    {
      id: 1,
      header: "Easy Baking Instructions",
      testimonial: `" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."`,
      src: testimonialsImg1,
      personName: "Brad",
      location: "Illinois",
    },
    {
      id: 2,
      header: "Chef Secrets Exposed",
      testimonial: `" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."`,
      src: testimonialsImg2,
      personName: "George",
      location: "London",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#ddb3b6",
          fontSize: "0",
          maxWidth: "1536px",
          margin: "auto",
        }}
      >
        <video autoPlay loop muted width="100%" height="450">
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <h1 className="mt-5" style={{ color: "#a77674" }}>
          Happy Kitchen.
        </h1>
        <h2 className="mt-4">
          Try our recipes, and they'll tell you about us!
        </h2>
        <p className="mt-4">{sampleText}</p>
      </div>

      {/* Marketing messaging and testimonials */}
      <div className="container marketing">
        {/* START MARKETING CONTENT */}
        <hr className="featurette-divider mt-5 mb-5 border-success opacity-25" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it's that good.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another placeholder? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src={marketingImg0}
              className="rounded img-fluid"
              alt="man holding plate"
            />
          </div>
        </div>

        <hr className="featurette-divider mb-5 border-success opacity-25" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And more, this one.{" "}
              <span className="text-body-secondary">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the best block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={marketingImg1}
              className="rounded img-fluid"
              alt="chocolate roll"
            />
          </div>
        </div>

        <hr className="featurette-divider mb-5 border-success opacity-25" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Another placeholder heading.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              More great placeholder content for your company here. Imagine some
              exciting prose here.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src={marketingImg2}
              className="rounded img-fluid"
              alt="cake slices"
            />
          </div>
        </div>

        <hr
          className="featurette-divider border-success opacity-25 w-50 mx-auto"
          style={{ marginTop: "90px" }}
        />
        {/* END MARKETING CONTENT */}

        {/* START TESTIMONIALS CAROUSEL*/}
        <h2
          className="mt-5 text-center display-3 opacity-75"
          style={{ color: "#a77674", fontFamily: "'Brush Script MT', cursive" }}
        >
          Testimonials
        </h2>

        <div className="d-flex justify-content-center">
          <div className="w-75">
            <Carousel data-bs-theme="dark" interval={2500}>
              {testimonials.map((theTestimonial) => (
                <Carousel.Item key={theTestimonial.id}>
                  <Testimonial
                    header={theTestimonial.header}
                    testimonial={theTestimonial.testimonial}
                    src={theTestimonial.src}
                    personName={theTestimonial.personName}
                    location={theTestimonial.location}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        {/* END TESTIMONIALS CAROUSEL*/}
      </div>
    </>
  );
};
export default About;
