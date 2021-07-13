import React from "react";
import { Image, Short, Title, Wrapper } from "./styles";

const ColumnItem = ({image = "", title="", short="" }) => (
        <Wrapper>
            <Image src={image} />
            <Title>{title}</Title>
            <Short>{short}</Short>
        </Wrapper>
    )

export default ColumnItem