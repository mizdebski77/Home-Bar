import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { vodka, gin, rum, whisky, tequila, shots } from '../../../core/coctails';
import { CoctailImage, CoctailName, CoctailTile, CustomSlider, FavButton, Ingredients, IngredientsTitle, TextArea, Title, Wrapper } from './styledCoctails';
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };



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
