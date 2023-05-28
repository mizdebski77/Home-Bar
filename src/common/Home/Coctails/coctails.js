import React from 'react';
import { useLocation } from 'react-router-dom';
import { vodka, gin, rum, whisky, tequila, shots } from '../../../core/coctails';
import { Title, Wrapper } from './styledCoctails';

export const Coctails = () => {

    const location = useLocation();

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

console.log(location.pathname);
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
        </Wrapper>
    );
};

