import "./Service.css";
import Title from "../title/Title";
const Service = ({ cdetails }) => {
  return (
    <>
      {cdetails.map((e,index) => {
        return (
          <div className="p-3 col-md-6 col-lg-4 card-wrapper" key={index}>
            <div className="service_card">
              <div className="icon">{e.img}</div>
              <Title content={e.con} />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Service;
