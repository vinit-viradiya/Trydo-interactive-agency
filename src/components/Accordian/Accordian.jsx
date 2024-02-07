import Accordion from "react-bootstrap/Accordion";
import List from "../list/List";
const Accordian = () => {
  let dropdown = {
    home: {
      id: 1,
      pages: [
        "Main Demo",
        "Creative Agency",
        "Startup",
        "Business",
        "Minimal Portfolio",
      ],
    },
    service: {
      id: 2,
      pages: ["Service", "Service Details"],
    },
    pages: {
      id: 3,
      pages: ["Blog List", "Portfolio Details", "404"],
    },
    blocks: {
      id: 4,
      pages: [
        "Portfolio",
        "Team",
        "Service",
        "Video Popup",
        "Progressbar",
        "Contact Form",
        "Google Map",
      ],
    },
  };
  return (
    <Accordion defaultActiveKey="0">
      <ul className="d-flex navbar">
        <li className="w-100">
          <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header>
              <a href="#" className="link">
                Home
              </a>
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <div>
                <List menu={dropdown.home} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </li>
        <li className="w-100">
          <Accordion.Item eventKey="1" className="border-0">
            <Accordion.Header>
              <a href="#" className="link">
                Service
              </a>
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <div>
                <List menu={dropdown.service} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="w-100">
          <Accordion.Item eventKey="2" className="border-0">
            <Accordion.Header>
              <a href="#" className="link">
                Pages
              </a>
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <div>
                <List menu={dropdown.pages} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </li>
        <li className="w-100">
          <Accordion.Item eventKey="3" className="border-0">
            <Accordion.Header>
              <a href="#" className="link">
                Blocks
              </a>
            </Accordion.Header>
            <Accordion.Body className="pt-0">
              <div>
                <List menu={dropdown.blocks} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Accordion>
  );
};
export default Accordian;
