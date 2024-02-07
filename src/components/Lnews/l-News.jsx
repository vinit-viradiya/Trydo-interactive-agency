import img1 from "../../assets/blog-01.jpg";
import img2 from "../../assets/blog-02.jpg";
import img3 from "../../assets/blog-03.jpg";
import Slide2 from "../Slide2/Slide2";
import Title from "../title/Title";

function Lnews() {
  const tcontent = [
    {
      heading: "Latest News",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    },
  ];
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
    }
  ];
  return (
    <>
      <section className="l-news py-120">
        <div className="container">
          <div className="row">
            <div className="title mb-5 text-dark col-6">
              <Title content={tcontent} />
              <a href="#javascript:;" className="link">
                <span>View All News</span>
              </a>
            </div>
          </div>
          <div className="row">
            <Slide2 content={scontent}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lnews;
