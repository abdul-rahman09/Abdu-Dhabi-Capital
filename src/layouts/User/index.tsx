import React from "react";
import { Container } from "react-bootstrap";

const User = (Content: any) => (props: any) => (
  <div className="wrapper">
    <Container fluid={true}>
      <Content {...props} />
    </Container>
  </div>
);

export default User;
