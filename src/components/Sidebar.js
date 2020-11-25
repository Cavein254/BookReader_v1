import React from "react";
import { Button, Container } from "react-bootstrap";
import "./styles.css";

function Sidebar() {
  return (
    <Container className="sidebar">
      <aside>
        <h5>Upload a text File</h5>
        <Button variant="secondary">Upload</Button>
      </aside>
    </Container>
  );
}

export default Sidebar;
