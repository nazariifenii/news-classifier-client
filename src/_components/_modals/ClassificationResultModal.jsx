import React from "react";
import { Modal, Button } from "react-bootstrap";

function ClassificationResultModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          Classification result for news:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          This news is: <b>{props.classificationResult}</b>
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-lg" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ClassificationResultModal };
