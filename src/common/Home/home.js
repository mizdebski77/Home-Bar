import React from 'react';
import { TitleLink } from './styledHome';

export const Home = () => {

    const links = [
        { name: 'Vodka' },
        { name: 'Tequila' },
        { name: 'Whiskey' },
        { name: 'Rum' },
        { name: 'Gin' },
        { name: 'Shots' },
        
    ];
    return (
        <div>
            {links.map((link, id) => (
                <TitleLink to={`/${link.name}`} key={id}>{link.name}</TitleLink>
            ))}
        </div>
    );
};

