import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {  gin, rum, whisky, tequila, shots, vodka } from '../../../core/coctails';
import { BackButton, BackText, CoctailImage, CoctailName, CoctailTile, CustomSlider, FavButton, Ingredients, IngredientsTitle, TextArea, Title, TitleWrapper, Wrapper } from './styledCoctails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import favButton from '../../images/favorite.svg';

export const Coctails = () => {
    const location = useLocation();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    const toggleFavorite = (id) => {
        const isFavorite = favorites.includes(id);
        if (isFavorite) {
            setFavorites(favorites.filter((favId) => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };


    const coctails =
        location.pathname.includes('Wodka')
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
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300,
                },
            },
        ],
    };

    console.log(location.pathname);


    return (
        <Wrapper>
            <TitleWrapper>
            <BackButton to="/home">🡸 <BackText>Powrót</BackText> </BackButton>

                <Title>
                    {location.pathname.includes("Shoty") ? "Shoty" :
                        ("Drinki z " +
                            (location.pathname.includes("Wodka") ? " Wódką"
                                : location.pathname.includes("Gin") ? " Ginem"
                                    : location.pathname.includes("Whisky") ? " Whisky"
                                        : location.pathname.includes("Rum") ? " Rumem"
                                            : " Tequilą"))
                    }
                </Title>
            </TitleWrapper>


            <CustomSlider {...settings}>
                {coctails.map((coctail, id) => (
                    <CoctailTile key={id}>
                        <CoctailImage src={coctail.image} />
                        <TextArea>
                            <CoctailName> {coctail.name}</CoctailName>
                            <IngredientsTitle>Składniki:</IngredientsTitle>
                            {coctail.ingredients.map((ingredient, id) => (
                                <Ingredients key={id}>
                                    {ingredient}
                                </Ingredients>
                            ))}
                        </TextArea>
                        <FavButton
                            fav={favorites.includes(coctail.id)}
                            onClick={() => toggleFavorite(coctail.id)}
                            src={favButton}
                        />
                    </CoctailTile>
                ))}
            </CustomSlider> 
        </Wrapper>
    );
};
