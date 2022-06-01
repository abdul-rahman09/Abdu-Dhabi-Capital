import React, { FunctionComponent, memo } from "react";
import { routes } from "routes/user";
import Modal from "components/Modal";
import { IModalSize } from "components/Modal/types";
import { Route, withRouter } from "react-router-dom";

interface IRouteBasedModal {
  path: string;
  title: string;
  component: any;
  size?: IModalSize;
  className?: string;
}

const RouteBasedModal: FunctionComponent<IRouteBasedModal> = ({
  path,
  title,
  size,
  className,
  component,
}) => {
  const onClose = (history: any, params: any) => {
    if (params.page) {
      history.push(routes.Details.format(params.page));
    }
  };
  const ChildComponent = component;

  return (
    <Route
      path={path}
      component={withRouter((props: any) => {
        return (
          <Modal
            show={title ? true : false}
            title={title}
            onClose={() => onClose(props.history, props.match.params)}
            size={size || IModalSize.xl}
            className={className || ""}
          >
            <ChildComponent
              onCancel={(events: any) =>
                onClose(props.history, props.match.params)
              }
            />
          </Modal>
        );
      })}
    />
  );
};

export default memo(RouteBasedModal);
