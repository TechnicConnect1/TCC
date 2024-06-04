import React, { useState } from 'react';
import './Orcamento1.css'

export const Orcamento1 = ({ onAdicionarAnuncio}) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [contato, setContato] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
  
    const handleImagemChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImagemUrl(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    const handlePublicarAnuncio = () => {
        const novoAnuncio = {
          id: Date.now(), // Gere um ID único para o anúncio
          titulo,
          descricao,
          contato,
          localizacao,
          imagemUrl
        };
    
        onAdicionarAnuncio(novoAnuncio);
    
        // Limpe os campos do formulário após adicionar o anúncio
        setTitulo('');
        setDescricao('');
        setContato('');
        setLocalizacao('');
        setImagemUrl('');
      };
    
  

  return (
    <div className="olx-page">
      <div className="olx-header">
        <h1 className='h11'>Faça seu Orçamento.</h1>
      </div>
      <div className="olx-form">
      <div className="input-group">
        <label>Título do anúncio:</label>
        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="descricaoa">Descrição:</label>
          <textarea id="descricao" rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="preco">Contato</label>
          <input type="text" id="contato" value={contato} onChange={(e) => setContato(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="localizacao">Localização:</label>
          <input type="text" id="localizacao" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="imagens">Imagens:</label>
          <input type="file" id="imagens" onChange={handleImagemChange} />
        </div>
        
        <button className="buttonanuncio"onClick={handlePublicarAnuncio}>Publicar anúncio</button>
      </div>
      
    </div>
  );
};

export default Orcamento1;
