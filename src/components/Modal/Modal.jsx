import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import "./Modal.css"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <iframe width="820" height="460" src="https://www.youtube.com/embed/uHz2ng84hFE?si=uuRPUGTGL6SQjNEU&amp;start=32" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </Modal>
  );
}

const MyModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='vbtn' variant="primary" onClick={() => setModalShow(true)}></Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default MyModal