import React from "react";
import { Segment } from "semantic-ui-react";

export const Reviews = props => {
  return (
    <Segment style={{backgroundColor:"#f7f7f7"}}>
      <div style={{ fontSize: "12px" }}>{props.header}</div>
      <p style={{ fontSize: "8px" }}>{props.description}</p>
    </Segment>
  );
};
