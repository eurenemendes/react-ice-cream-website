import styled from "styled-components";
import FeaturePic from '../../images/ice-cream-1.jpg'

export const FeatureContainer = styled.div`
    background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 96%), 
    url(${FeaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    width: 100%;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
        text-shadow: 0.1em 0.1em 0.2em black;
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
        text-shadow: 0.1em 0.1em 0.2em black;
    }
`;

export const FeatureButton = styled.button`
    border-radius: 2em;
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #FF4500;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        color: #000;
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;