import React from 'react'
import './Portfolio.css'

const Cards = ({ titulo, description, imageUrl, link, tag }) => {
    return (
        <div className='card-container'>
            <div className='container-img'>
                <img src={imageUrl} alt={titulo} className='image-card'></img>
            </div>
            <div className='card-text'>
                <h2 className='card-title'>{titulo}</h2>
                <p className='card-description'>{description}</p>
                <a className='card-button' href={link} target='_blank' rel='noopener noreferrer'> + Detalhes</a>
            </div>

        </div>
    )
}

export default Cards;