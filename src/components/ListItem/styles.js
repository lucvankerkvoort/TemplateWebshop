import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  width: 50%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid lightgray;
  margin: 1rem auto;
  padding: 1rem;
  transition: 0.15s;

  &:hover {
    transform: scale(1.2);
    margin: 1.5rem auto;
  }
`;

export const Image = styled.div`
  width: 250px;
  height: 250px;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
`;

export const Title = styled.h2`
  color: lightgray;
`;

export const Short = styled.small`
  color: lightgray;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  flex-direction: column;
  width: 50%;
  text-align: center;
`;

export const Price = styled.p`
  color: black;
  width: 120px;
  margin: auto;
`;
