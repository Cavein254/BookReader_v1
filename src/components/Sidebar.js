import React from "react";
import { Container } from "react-bootstrap";

function Sidebar() {
  return (
    <Container
      style={{
        backgroundColor: "#000",
        maxWidth: "23%",
        minHeight: "100%",
        top: "0",
        left: "0",
        position: "fixed",
        zIndex: "-10",
      }}
    ></Container>
  );
}

export default Sidebar;
