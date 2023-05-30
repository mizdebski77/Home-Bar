import Slider from "react-slick";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    min-height: 95vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: 100vh;
    }
`;

export const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.color.second};
    align-items: center;
    margin: 0 20px;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: normal;
    font-size: 48px;
    margin: 0;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    }
`;

export const BackButton = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontColor};
    padding: 10px;
    transition: 0.8s;
    margin-left:10px;
    border-radius: 10px;
    position: absolute;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        position: null;
        margin-left:0;
    }

    :hover {
        cursor: pointer;
        transform:scale(1.05);
        color: ${({ theme }) => theme.color.secondColor};
        background: ${({ theme }) => theme.color.thirdColor};
    }
`;

export const BackText = styled.span`
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        display: none;
    } 
`;

export const CustomSlider = styled(Slider)`
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 940px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 100%;
        padding: 0px;
    }

    .slick-slide {
        padding: 10px;
        margin-bottom: 20px;
    }

    .slick-dots {
        margin: -16px;
        li {
            button:before {
                color: ${({ theme }) => theme.color.fontColor};
                font-size: 16px;

                @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
                    font-size: 12px;
                }
            }
        }
    };

    .slick-prev::before,
    .slick-next:before {
        color: ${({ theme }) => theme.color.fontColor};
    }
`;

export const CoctailTile = styled.div`
    max-width: 440px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.secondColor};
    border: 1px solid ${({ theme }) => theme.color.fontColor};
    box-shadow: ${({ theme }) => theme.color.thirdColor} 4px 4px 4px;
`;

export const TextArea = styled.div`
    min-height: 310px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: 220px;
    }
`;

export const IngredientsTitle = styled.h3`
    text-align: center;
    font-weight: normal;
    font-size: 28px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    }
`;

export const CoctailName = styled.h2`
    text-align: center;
    font-weight: normal;
    font-size: 32px;
    text-decoration: underline;
    text-underline-offset: 8px;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        text-underline-offset: 4px;
        font-size: 24px;
    }
`;

export const CoctailImage = styled.img`
    width: 400px;
    height: 265px;
    margin: 0 auto;
    box-shadow: ${({ theme }) => theme.color.fontColor} 0 0 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 100%;
        height: 100%;
        max-height: 170px;
    }
`;

export const Ingredients = styled.li`
    margin-top: 10px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    }
`;

export const FavButton = styled(SVG)`
    width: 24px;
    margin: 0 0 0 95%;
    cursor: pointer;
    fill: ${({ theme }) => theme.color.fontColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 20px;
    }

    ${({ fav }) => fav && css`
        fill: ${({ theme }) => theme.color.favorite};
    `};
`;


