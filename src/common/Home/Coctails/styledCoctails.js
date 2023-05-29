import Slider from "react-slick";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    min-height: 95vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: normal;
    font-size: 48px;
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid ${({theme}) => theme.color.thirdColor};
`;

export const CustomSlider = styled(Slider)`
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;

    .slick-dots {
        li {
            button:before {
                color: ${({theme}) => theme.color.fontColor};
                font-size: 16px;
            }
        }
    };

    .slick-prev::before,
    .slick-next:before {
        color: ${({theme}) => theme.color.fontColor};
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
`;  

export const IngredientsTitle = styled.h3`
    text-align: center;
    font-weight: normal;
    font-size: 28px;
`;

export const CoctailName = styled.h2`
    text-align: center;
    font-weight: normal;
    font-size: 32px;
    text-decoration: underline;
    text-underline-offset: 8px;
`;

export const CoctailImage = styled.img`
    width: 400px;
    height: 265px;
    margin: 0 auto;
    box-shadow: ${({ theme }) => theme.color.fontColor} 0 0 10px;

    /* @media (max-width: ${({theme}) => theme.breakPoint.firstBreakPoint}px){
        width: 300px;
        height: 200px;
    } */
`;

export const Ingredients = styled.li`
    margin-top: 10px;
    font-size: 20px;
`;

export const FavButton = styled(SVG)`
    width: 24px;
    margin: 0 0 0 95%;
    cursor: pointer;
    fill: ${({theme}) => theme.color.fontColor};

    ${({fav}) => fav && css`
        fill: ${({theme}) => theme.color.favorite};
    `};
`;
