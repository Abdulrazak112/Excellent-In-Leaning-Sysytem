import React from "react";

function CustomScrollbar(props) {
  const { height = "75vh" } = props;
  return (
    <div style={{ height: height, overflow: "scroll" }} {...props}>
      {props.children}
    </div>
  );
}

export default CustomScrollbar;
