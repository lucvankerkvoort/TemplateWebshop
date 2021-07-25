import React from "react";
import { BuyButton } from "../../ui/general-styles";
import { Wrapper, Image, TextWrapper, Title, Short, Price } from "./styles";

const ListItem = ({ image = "", title = "", short = "", price }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <TextWrapper>
        <Title>{title}</Title>
        <Short>{short}</Short>
      </TextWrapper>
      <TextWrapper>
        <Price>{price}</Price>
        <BuyButton>Buy</BuyButton>
      </TextWrapper>
    </Wrapper>
  );
};

export default ListItem;
