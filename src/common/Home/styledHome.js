import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
    border: 1px solid ${({ theme }) => theme.color.thirdColor};
    min-height: 95vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: null;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr 1fr;
        margin-top: 50px;
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    margin: 0;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.thirdColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    }
`;

export const PhotoLink = styled(Link)`
    display: grid;
    justify-content: center;
    gap: 20px;
    color: white;
    text-decoration: none;
`;

export const TitleLink = styled.h1`
    font-size: 32px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    }
`;

export const Photo = styled.img`
    transition: 0.5s;

    :hover{
        transform: translateY(-16px);
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 100px;
    }
`;