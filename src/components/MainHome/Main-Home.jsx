import About from "../About/About";
import BrandsArea from "../Brand-area/BrandsArea";
import Footer2 from "../Footer2/Footer2";
import Lnews from "../Lnews/l-News";
import MainBanner from "../Main-banner/MainBanner";
import Services2 from "../Services2/Services2";
import Testimonial from "../Testimonial/Testimonial";
import Work from "../Work/Work";
import "./Main-Home.css";

const MainPage = () => {
  return (
    <>
      <main>
        <MainBanner />
        <About />
        <Services2 />
        <Work />
        <Testimonial />
        <Lnews />
        <BrandsArea />
      </main>
      <footer className="p-0">
        <Footer2 />
      </footer>
    </>
  );
};
export default MainPage;
