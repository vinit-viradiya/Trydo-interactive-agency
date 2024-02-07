import Banner from "../Banner/Banner";
import OurWork from "../OurWork/OurWork";
import Services from "../WServices/Services";
import RnSection from "../Rn-section/Rn-section";
import BrandsArea from "../Brand-area/BrandsArea";
import Footer from "../Footer/Footer";
const HomePage = () => {
    return (
        <>
        <main>
            <Banner />
            <OurWork />
            <Services />
            <RnSection />
            <BrandsArea />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    );
};
export default HomePage;
