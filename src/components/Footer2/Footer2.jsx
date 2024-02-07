import img from "../../assets/big-logo.png";

function Footer2() {
  return (
    <>
      <div className="container-fliud">
        <div className="row g-0">
          <div className="col-6 footer-left d-flex justify-content-evenly">
            <div className="f-content col-6">
              <span>READY TO DO THIS</span>
              <h2 className="display-1 fw-bolder">Let's get to work</h2>
              <button className="button text-white border-white">
                CONTACT US
              </button>
            </div>
            <div className="f-img col-6 text-end z-1">
              <img src={img} className="img-fluid" alt="b-logo" />
            </div>
          </div>
          <div className="col-6 footer-right d-flex flex-wrap">
            <div className="col-6">
              <h5 className="pb-4">Quick Link</h5>
              <ul>
                <li className="py-2">
                  <a href="#">Work</a>
                </li>
                <li className="py-2">
                  <a href="#">About</a>
                </li>
                <li className="py-2">
                  <a href="#">Let's Talk</a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h5 className="pb-4">Say Hello</h5>
              <ul>
                <li className="py-2">
                  <a href="#">admin@example.com</a>
                </li>
                <li className="py-2 pb-4">
                  <a href="#">hr@example.com</a>
                </li>
                <ul className="d-flex">
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook pe-3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-linkedin px-3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram px-3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter ps-3"></i>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <p className="col-12">
              Copyright © 2022 Rainbow-Themes. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
