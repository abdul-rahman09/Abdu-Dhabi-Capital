import React, { FunctionComponent } from "react";
import { routes as detailRoutes } from "routes/user";
import RouteBasedModal from "components/Modal/RouteBasedModal";
import UserDetails from "pages/Dashboard/containers/UserDetails";
import { IModalSize } from "components/Modal/types";

const ModalsPanel: FunctionComponent<any> = (props) => {
  return (
    <>
      <RouteBasedModal
        path={detailRoutes.UserDetail.path}
        title={"User Details"}
        size={IModalSize.lg}
        className={""}
        component={UserDetails}
      />
    </>
  );
};

export default ModalsPanel;
