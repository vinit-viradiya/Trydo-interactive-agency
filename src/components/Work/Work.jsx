import img1 from "../../assets/p-1.webp";
import img2 from "../../assets/p-2.webp";
import img3 from "../../assets/p-3.webp";
import img4 from "../../assets/p-4.webp";
import Fact from "../Fact/Fact";
import Slide from "../Slide/Slide";
import Title from "../title/Title";
function Work() {
  const tcontent = [
    {
      heading: "Our Works",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    },
  ];
  const facts = [
    {
      count: 399,
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      count: 575,
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      count: 69,
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    }
  ]
  const scontent = [
    {
      img: img1,
      title: "Development",
      link: "Getting tickets to the big show",
    },
    {
      img: img2,
      title: "Development",
      link: "Getting tickets to the big show",
    },
    {
      img: img3,
      title: "Development",
      link: "Getting tickets to the big show",
    },
    {
      img: img4,
      title: "Development",
      link: "Getting tickets to the big show",
    },
  ];
  return (
    <>
      <section className="works py-120">
        <div className="container">
          <div className="row">
            <div className="col-6 mb-5">
              <Title content={tcontent} />
            </div>
          </div>
        </div>
        <div className="work-slider d-flex p-5">
          <Slide content={scontent} />
        </div>
        <div className="container py-120 pb-0">
          <div className="row">
            <h3 className="text-center display-6 fw-medium lh-lg">
              Our Fun Facts
            </h3>
            <Fact fContent={facts}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
