import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: 0.75s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    margin: ${({ select }) => select && "2rem"};
    transform: ${({ select }) => select && "scale(1.2)"};
  }
`;

export const Image = styled.div`
  width: 250px;
  height: 150px;
  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
`;

export const Title = styled.h2`
  width: 75%;
  color: black;
`;

export const Price = styled.p`
  color: black;
  width: 120px;
  margin: auto;
`;

export const Rating = styled.div`
  display: flex;
  height: 1.5rem;
  width: 50%;
  min-width: 100px;
`;
export const TextWrapper = styled.div`
  display: flex;
  width: 250px;
  margin: 0 1rem;
  flex-wrap: wrap;
`;
