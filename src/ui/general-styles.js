import styled from "styled-components";

export const BuyButton = styled.button`
  width: 25%;
  min-width: 50px;
  text-shadow: 0.5px 1px 1px gray;
  height: 25%;
  min-height: 25px;
  margin: auto;
  border: none;
  box-shadow: 2px 2.5px 2px darkgray;
  transition: 0.2s;
  cursor: pointer;
  background-color: orange;

  &:hover {
    box-shadow: 3px 3.5px 2px darkgray;
  }

  &:active {
    box-shadow: 0.5px 0.5px 2px gray;
  }
`;
