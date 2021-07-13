import React from "react";
import { Wrapper, Image, TextWrapper, Title, Short } from "./styles";

const ListItem = ({image = "", title="", short="" }) => {

    return (
        <Wrapper>
            <Image src={image}/>
            <TextWrapper>
                <Title>{title}</Title>
                <Short>{short}</Short>
            </TextWrapper>
        </Wrapper>
    )
}

export default ListItem