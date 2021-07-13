import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    box-shadow: 5px 5px 15px lightgray;
    border: 1px solid lightgray;
    border-radius: 7px;
    margin: 1.5rem;
    padding: 1rem;
`

export const Image = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 5px;
    background: url(${props => props.src}) no-repeat center;
`

export const Title = styled.h2`
    color: lightgray
`

export const Short = styled.small`
    color: lightgray
`