import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MyOrderList from "./MyOrderList";

export default () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button className="myOrder" onClick={toggle}>
        My Order
      </button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>My Order</ModalHeader>
        <ModalBody>
          <MyOrderList toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
