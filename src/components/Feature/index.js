import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const  Feature = () => {
    return (
        <FeatureContainer>
            <h1>Especial do Dia</h1>
            <p>Sorvete de Leite Trufado Zero Lactose</p>
            <FeatureButton>Faça seu pedido</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
