import styled from "styled-components";
import ImgBg from '../../images/ice-cream-3.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 96%), 
    url(${ImgBg});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100%;
    padding: 0rem calc((100vw - 1300px) /2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
    text-shadow: 0.1em 0.1em 0.2em black;
`;
export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    text-shadow: 0.1em 0.1em 0.2em black;
`;
export const HeroBtn = styled.button`
    border-radius: 2em;
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #FF4500;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;



