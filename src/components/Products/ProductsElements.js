import styled from 'styled-components';
import {FaShoppingCart} from 'react-icons/fa';

export const ProductsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    color: #fff;
    background: linear-gradient(to right, #200122, #6f0000);
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ProductImg = styled.img`
    border-radius: 50%;
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #FF4500;
    filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.5));
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover{
        transform: scale(1.1);
       transition: 0.3s ease-out;
    }
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align:  center;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

export const ProductButton = styled.button`
    border-radius: 2em;
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #FF4500;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        color: #000;
        cursor: pointer;
 }
`;

export const ShoppingCart = styled(FaShoppingCart)`
`;