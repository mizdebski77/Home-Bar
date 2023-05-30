import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`

`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
`;

export const Title = styled.h1`
    font-size: 48px;
`;

export const PhotoLink = styled(Link)`
    display: grid;
    justify-content: center;
    gap: 20px;
    color: white;
    text-decoration: none;
`;

export const TitleLink = styled.h1`
    padding: 20px;
    font-size: 32px;
`;

export const Photo = styled.img`
    transition: 0.5s;

    :hover{
        transform: translateY(-16px);
        cursor: pointer;
        }
`;