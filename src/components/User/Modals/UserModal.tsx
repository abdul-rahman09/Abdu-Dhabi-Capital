import React, { FunctionComponent, useContext } from "react";
import { ReferenceDataContext } from "App";

const UserDetails: FunctionComponent<any> = () => {
  const { language } = useContext<any>(ReferenceDataContext);

  return (
    <>
      <div>DETAILS</div>
      {JSON.stringify(language)}
    </>
  );
};

export default UserDetails;
