import Heading from "../Heading/Heading";
import Button from "../button/Button";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <section className="banner text-center text-md-start">
        <div className="container">
          <div className="row">
            <div>
              <Heading />
              <Button content={"CONTACT US"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;