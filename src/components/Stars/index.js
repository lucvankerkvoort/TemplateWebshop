import React from "react";
import { Star } from "./styles";
import { starCount } from "./utils";

const Stars = ({ starAmount }) => {
  console.log(starCount(starAmount));
  return starCount(starAmount).map((stars, i) => (
    <Star key={i} color={stars} />
  ));
};

export default Stars;
