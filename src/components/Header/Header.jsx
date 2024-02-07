import Logo from "../logo/Logo";
import Button from "../button/Button";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Sidemenu from "../Offcanvas/Offcanvas";
const Header = () => {
  return (
    <>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-3">
              <Logo />
            </div>
            <div className="d-flex align-items-center">
              <div className="d-none d-lg-block">
                <Navbar/>
              </div>
              <div className="d-none d-sm-block ps-lg-5">
                <Button content={"BUY NOW"} />
              </div>
              <div className="d-lg-none">
                <Sidemenu />
              </div>
            </div>
          </div>
        </div>
        
    </>
  );
};
export default Header;
