import React from "react";
import { Rating } from "semantic-ui-react";

export const RatingItem = props => {
  return (
    <div>
      <div>{props.name}</div>
      <Rating
        maxRating={5}
        defaultRating={props.rating}
        icon="star"
        size="large"
        disabled
      />
    </div>
  );
};
