import React, { FunctionComponent, memo } from "react";
import { Modal as BSModal } from "react-bootstrap";
import { IModal, IModalSize } from "components/Modal/types";
import "components/Modal/style.scss";

const Modal: FunctionComponent<IModal> = ({
  show,
  onClose,
  title,
  size,
  className,
  children,
}) => {
  return (
    <BSModal
      show={show}
      onHide={onClose}
      centered
      size={size || undefined}
      dialogClassName={className}
    >
      <BSModal.Header closeButton translate="true">
        <BSModal.Title>{title}</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>{children}</BSModal.Body>
    </BSModal>
  );
};

Modal.defaultProps = {
  size: IModalSize.default,
  show: false,
  onClose: () => {},
};
export default memo(Modal);
