import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { vodka, gin, rum, whisky, tequila, shots } from '../../../core/coctails';
import { CoctailImage, CoctailName, CoctailTile, CustomSlider, FavButton, Ingredients, IngredientsTitle, TextArea, TileWrapper, Title, Wrapper } from './styledCoctails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import favButton from '../../images/favorite.svg';

export const Coctails = () => {

    const location = useLocation();
    const [favorite, setFavorite] = useState(false);

    const addCoctailToFavorite = () => {
        setFavorite(!favorite);
    }

    

    const coctails =
        location.pathname.includes('Vodka')
            ? vodka :
            location.pathname.includes('Gin')
                ? gin :
                location.pathname.includes('Rum')
                    ? rum :
                    location.pathname.includes('Whisky')
                        ? whisky :
                        location.pathname.includes('Tequila')
                            ? tequila : shots;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,

    };

    console.log(favorite);


    return (
        <Wrapper>
            <Title>
                {location.pathname.includes("Shots") ? "Shoty" :
                    ("Drinki z " +
                        (location.pathname.includes("Vodka") ? " Wódką"
                            : location.pathname.includes("Gin") ? " Ginem"
                                : location.pathname.includes("Whisky") ? " Whisky"
                                    : location.pathname.includes("Rum") ? " Rumem"
                                        : " Tequilą"))
                }
            </Title>

            <CustomSlider {...settings}>
                {coctails.map((coctail, id) => (
                    <CoctailTile key={id}>
                        <TileWrapper>
                            <CoctailImage src={coctail.image} />
                            <TextArea>
                                <CoctailName> {coctail.name}</CoctailName>
                                <IngredientsTitle>Składniki:</IngredientsTitle>
                                {coctail.ingredients.map((ingridient, id) => (
                                    <Ingredients key={id}>
                                        {ingridient}
                                    </Ingredients>
                                ))}
                            </TextArea>
                        </TileWrapper>
                        <FavButton fav ={favorite} onClick={addCoctailToFavorite} src={favButton} />

                    </CoctailTile>
                ))}
            </CustomSlider>
        </Wrapper>
    );
};

