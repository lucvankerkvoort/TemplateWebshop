import React from "react";
import { BuyButton } from "../../ui/general-styles";
import Stars from "../Stars";
import { Image, Price, Title, Wrapper, TextWrapper, Rating } from "./styles";

const ColumnItem = ({ image = "", title = "", price = "" }) => (
  <Wrapper>
    <Image src={image} />
    <TextWrapper>
      <Title>{title}</Title>
      <BuyButton>Buy</BuyButton>
      <Price>{price}</Price>
      <Rating>
        <Stars starAmount={4} />
      </Rating>
    </TextWrapper>
  </Wrapper>
);

export default ColumnItem;
