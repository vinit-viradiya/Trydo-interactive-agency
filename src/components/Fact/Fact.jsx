import React from "react";

function Fact({ fContent }) {
  return (
    <>
      {fContent.map((item,index) => {
        return (
          <div className="col-4 text-center" key={index}>
            <span className="count">{item.count}</span>
            <p className="fs-5 text-secondary">{item.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default Fact;
