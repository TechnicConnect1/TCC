import React from 'react';
import './AnuncioCard.css'

const AnuncioCard = ({ titulo, descricao, contato, localizacao, imagemUrl }) => {
  return (
    <div className="anuncio-card">
      <img src={imagemUrl} alt="Imagem do anúncio" />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descricao}</p>
        <p className="card-text">Contato: {contato}</p>
        <p className="card-text">Localização: {localizacao}</p>
      </div>
    </div>
  );
};

export default AnuncioCard;