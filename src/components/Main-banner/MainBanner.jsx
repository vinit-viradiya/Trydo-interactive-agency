import "./MainBanner.css";
import img1 from "../../assets/icon-01.png";
import img2 from "../../assets/icon-02.png";
import img3 from "../../assets/icon-03.png";
import ServiceCard from "../ServiceCard/ServiceCard";
const MainBanner = () => {
  const cardContent = [
    {
      img: img1,
      title: "Business Stratagy",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
    },
    {
      img: img2,
      title: "Website Development",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
    },
    {
      img: img3,
      title: "Marketing & Reporting",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
    }
  ]
  return (
    <>
      <section className="Main-banner align-items-center py-120">
        <div className="container">
          <div className="row">
            <div className="heading col-7">
              <h1>A DIGITAL AGENCY.</h1>
            </div>
          </div>
          <div className="row">
            <ServiceCard content={cardContent} />
          </div>
        </div>
      </section>
    </>
  );
};
export default MainBanner;
