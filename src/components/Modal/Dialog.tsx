import React, { FunctionComponent } from "react";
import { Modal as BSModal } from "react-bootstrap";
import { IDialog, IModalSize } from "components/Modal/types";
import "components/Modal/style.scss";

const Dialog: FunctionComponent<IDialog> = ({
  title,
  size,
  onClose,
  children,
}) => {
  return (
    <BSModal.Dialog size={size || undefined}>
      <BSModal.Header closeButton onHide={onClose} translate>
        <BSModal.Title>{title}</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>{children}</BSModal.Body>
    </BSModal.Dialog>
  );
};

Dialog.defaultProps = {
  size: IModalSize.default,
};
export default Dialog;
