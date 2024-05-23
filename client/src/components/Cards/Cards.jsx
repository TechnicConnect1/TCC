// src/components/Cards.js
import React from 'react';
import "./Cards.css";

export const Cards = ({ item, onSolicitarOrcamento }) => {
    return (
        <div className='componente'>
            <div className="cards">
                <div className="card-imagem">
                    <img src={item.image} alt="" />
                </div>

                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <span className='card-price'>{item.price}</span>
                    <p>{item.description}</p>
                    <div className="card-actions">
                        <button onClick={onSolicitarOrcamento}>Solicitar orçamento</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
