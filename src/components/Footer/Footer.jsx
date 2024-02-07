import "./Footer.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row flex-wrap align-items-center footer px-5">
        <div className="col-md-6 col-lg-4"><Logo /></div>
        <div className="my-4 my-md-2 col-md-6 text-end text-lg-center col-lg-4">
          <Button content={<i className="bi bi-linkedin"></i>} />
          <Button content={<i className="bi bi-facebook"></i>} />
          <Button content={<i className="bi bi-instagram"></i>} />
          <Button content={<i className="bi bi-twitter"></i>} />
        </div>
        <h6 className="opacity-75 col-md-12 text-center text-lg-end col-lg-4 m-0">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</h6>
      </div>
    </>
  );
};
export default Footer;
