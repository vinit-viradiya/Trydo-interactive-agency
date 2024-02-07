import Brands from "../Brands/Brands";
import img1 from "../../assets/b1.png";
import img2 from "../../assets/b2.png";
import img3 from "../../assets/b3.png";
import img4 from "../../assets/b4.png";
import img5 from "../../assets/b5.png";

const BrandsArea = () => {
  let imgs = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
  ];
  return (
    <>
      <section className="brands py-120">
        <div className="container pb-5">
          <div className="row">
            <Brands images={imgs} />
          </div>
        </div>
      </section>
    </>
  );
};
export default BrandsArea;
