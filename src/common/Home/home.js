import React from 'react';
import { Container, Photo, PhotoLink, Title, TitleLink, Wrapper } from './styledHome';
import vodka from '../images/alcohol/vodka.webp';
import whisky from '../images/alcohol/whisky.webp';
import gin from '../images/alcohol/gin.webp';
import rum from '../images/alcohol/rum.webp';
import shots from '../images/alcohol/shots.webp';
import tequila from '../images/alcohol/tequila.webp';
import { useTrail, animated } from 'react-spring';

export const Home = () => {

    const links = [
        { name: 'Vodka', photo: vodka },
        { name: 'Tequila', photo: tequila },
        { name: 'Whisky', photo: whisky },
        { name: 'Rum', photo: rum },
        { name: 'Gin', photo: gin },
        { name: 'Shots', photo: shots },
    ];

    const trail = useTrail(links.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    });

    return (
        <Wrapper>
            <Title> Czego się napijesz? </Title>
            <Container>
                {trail.map((style, index) => (
                    <animated.div key={links[index].name} style={style}>
                        <PhotoLink to={`/${links[index].name}`}>
                            <Photo src={links[index].photo} />
                            <TitleLink>{links[index].name}</TitleLink>
                        </PhotoLink>
                    </animated.div>
                ))}
            </Container>

        </Wrapper >

    );
};

