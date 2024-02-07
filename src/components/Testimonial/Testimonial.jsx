import img1 from "../../assets/testimonial-1.jpg"
import img2 from "../../assets/testimonial-2.jpg"
import img3 from "../../assets/testimonial-3.jpg"
import img4 from "../../assets/testimonial-4.jpg"
import img5 from "../../assets/testimonial-5.jpg"
import img6 from "../../assets/testimonial-6.jpg"
import img7 from "../../assets/testimonial-7.jpg"
import img8 from "../../assets/testimonial-8.jpg"
import TImage from "../tImage/tImage"
function Testimonial() {
  const tImg = [{
    img: img2
  },
  {
    img: img3
  },
  {
    img: img4
  },
  {
    img: img5
  },
  {
    img: img6
  },
  {
    img: img7
  },
  {
    img: img8
  }
]
  return (
    <>
      <section className="testimonial py-120">
    <div className="container">
      <div className="row text-center justify-content-center">
        <p className="display-6 fw-medium px-5">
          Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections Bonorum et Malorum original.
        </p>
        <h5 className="text-secondary fw-normal my-5">
          <span className="text-dark">
            AKLIMA
          </span> - COO, AMERIMAR ENTERPRISES, INC.
        </h5>
        <div className="testi active col-1">
          <img src={img1} className="img-fluid" alt="user" />
        </div>
        <TImage content={tImg}/>
      </div>
    </div>
  </section>
    </>
  )
}

export default Testimonial