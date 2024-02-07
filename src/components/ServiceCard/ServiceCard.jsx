import React from "react";

function ServiceCard({ content }) {
  return (
    <>
      {content.map((item,index) => {
        return (
          <div className="service_card text-start noHover bg-transparent px-3 col-12 col-md-6 col-lg-4" key={index}>
            <div className="icon">
              <img src={item.img} alt="icon" />
            </div>
            <div className="title">
              <div>
                <h2 className="my-3">{item.title}</h2>
                <p>{item.para}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ServiceCard;
