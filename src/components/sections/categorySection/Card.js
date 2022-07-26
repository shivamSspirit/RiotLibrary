import React from 'react'
import './card.css'
import OneCard from '../../cards/oneCard/oneCard';

function Card(props) {
    const { Videoscatee } = props;

    return (
        <>
            <OneCard isCategoryCard={true} CategoryCardData={Videoscatee}/>
        </>
    )
}

export default Card
