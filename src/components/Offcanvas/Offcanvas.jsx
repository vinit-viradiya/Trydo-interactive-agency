import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Offcanvas.css"
import Accordian from '../Accordian/Accordian';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{color:"#c6c9d8"}} className='btn fs-2' variant="primary" onClick={handleShow}>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className='justify-content-end p-4 pb-0'></Offcanvas.Header>
        <Offcanvas.Body className='pt-0'>
          <Accordian />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Sidemenu = () => {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Sidemenu