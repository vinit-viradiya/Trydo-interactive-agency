import img from "../../assets/about1.jpg";
import Title from "../title/Title";

function About() {
  const tcontent = [
    {
      heading: "About",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
    },
  ];
  return (
    <>
      <section className="about py-120">
        <div className="container">
          <div className="row">
            <div className="col-5 px-4">
              <img src={img} className="img-fluid shadow" alt="About" />
            </div>
            <div className="col-7 px-4">
              <Title content={tcontent} />
              <div className="d-flex mt-5">
                <div className="title me-4">
                  <h2 className="mb-3 fs-2 fw-medium">Who we are</h2>
                  <p>
                    There are many vtions of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
                <div className="title ms-4">
                  <h2 className="mb-3 fs-2 fw-medium">Who we are</h2>
                  <p>
                    There are many vtions of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
