import React from "react";
import { Button } from "react-bootstrap";
const ButtonOk = ({ onHide }) => {
  return (
    <div>
      <Button
        className="mb-3 border-0 bg-info text-light"
        style={{
          width: "171px",
          height: "49px",
          borderRadius: "20px",
        }}
        onClick={onHide}
      >
        OK
      </Button>
    </div>
  );
};

export default ButtonOk;
