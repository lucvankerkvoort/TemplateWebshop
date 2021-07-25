import styled from "styled-components";

export const Star = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background: ${({ color }) =>
    color === "full" ? "orange" : "rgba(0,0,0,0.5)"};
  height: 100%;
  width: 100%;
`;
