import React from 'react';
import {View, Text} from "react";
import {Ionicons, Feather} from '@expo/vector-icons'

import {
    Container, 
    Title, 
    RateContainer, 
    Rate,
    ActionContainer,
    DetailButton,
    DeleteButton
} from './styles'


function FavoriteItem(){
    return(
        <Container>
            <Title>
                Titulo do filme
            </Title>
            <RateContainer>
            <Ionicons
            name="md-star"
            size={12}
            color="#E7A74e"
            />
            <Rate>6./10</Rate>
            </RateContainer>
            <ActionContainer>
                <DetailButton>
                    <Title  size={14}>
                        Ver Detalhes
                    </Title>
                </DetailButton>
                <DeleteButton>
                    <Feather 
                    name="trash"
                    size={24}
                    color="#FFF"/>
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}

export default FavoriteItem;
