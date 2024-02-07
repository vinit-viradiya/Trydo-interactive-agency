import React from "react";

function Slide2({ content }) {
  return (
    <>
      {content.map((slide,index) => {
        return (
          <div className="p-4 px-3 slide col-4" key={index}>
            <div className="overflow-hidden position-relative">
              <div className="p-img">
                <img src={slide.img} alt="portfolio-img" />
              </div>
              <div className="p-content">
                <p>{slide.title}</p>
                <a href="#">{slide.link}</a>
                <button className="button mt-4">CASE STUDY</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Slide2;
