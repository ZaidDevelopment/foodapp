export default function Testimonial(props) {

    return (
        <>
            <div className='container text-center mt-5 mb-5'>
                <h2 className='fw-light' style={{ color: "#a77674" }}>{props.header}</h2>
                <p className='fs-6 fw-lighter fst-italic'>{props.testimonial}</p>
                <img
                    className="mx-auto d-block rounded-circle shadow-1-strong mt-5"
                    style={{ width: "150px" }}
                    src={props.src}
                    alt="avatar"
                />
                <em>{props.personName}, {props.location}</em>
            </div>
        </>
    )
}
