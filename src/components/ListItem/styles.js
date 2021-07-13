import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-flex;
    width: 50%;
    box-shadow: 5px 5px 15px lightgray;
    border: 1px solid lightgray;
    border-radius: 7px;
    margin: 1rem auto ;
    padding: 1rem;
`

export const Image = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 5px;
    background: url(${props => props.src}) no-repeat center ;
    background-size: cover;
`

export const Title = styled.h2`
    color: lightgray
`

export const Short = styled.small`
    color: lightgray
`

export const TextWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 50%;
    text-align: center;
`