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
`;

export const CustomSlider = styled(Slider)`
    max-width: 960px;
    margin: 0 auto;
`;

export const CoctailTile = styled.div`
    max-width: 1000px;
    padding: 20px;
    margin: 0 auto;
    gap: 28px;
    background: ${({ theme }) => theme.color.secondColor};
    border: 1px solid ${({ theme }) => theme.color.fontColor};
    box-shadow: ${({ theme }) => theme.color.thirdColor} 0 10px 10px;
`;

export const TileWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 40px;
`;

export const TextArea = styled.div`

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
    width: 500px;
    margin: 0 auto;
`;

export const Ingredients = styled.li`
    margin-top: 10px;
    font-size: 20px;
`;

export const FavButton = styled(SVG)`
    width: 24px;
    margin: 0 0 0 90%;
    cursor: pointer;
    fill: white;

    ${({fav}) => fav && css`
        fill: ${({theme}) => theme.color.favorite};
    `};
`;
