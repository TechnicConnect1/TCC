import React, { useState, useEffect } from 'react';
import "./Orcamento.css";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";

export const Orcamento = ({ item, onClose }) => {
    const [service, setService] = useState(item ? item.name : '');
    const [userData, setUserData] = useState({ name: '', email: '' });

    useEffect(() => {
        // Recupere os dados do usuário do localStorage
        const userFromStorage = localStorage.getItem('user_data');
        if (userFromStorage) {
            setUserData(JSON.parse(userFromStorage));
        }

        // document.body.classList.add('no-scroll');
        // // Remova a classe quando o componente for desmontado
        // return () => {
        //     document.body.classList.remove('no-scroll');
        // };
        
    }, []);

    if (!item) {
        return null;
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setUserData(prevData => ({ ...prevData, name: newName }));
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setUserData(prevData => ({ ...prevData, email: newEmail }));
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            padding: '10px',
            backgroundColor: '#1c1c1c',
            border: '1px solid #171717',
            borderRadius: '4px',
            color: 'white',
            fontSize: '18px',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
    };

    const options = [
        { label: "Iphone", value: "Iphone" },
        { label: "Samsung", value: "Samsung" },
        { label: "Motorola", value: "Motorola" },
        { label: "Xiaomi", value: "Xiaomi" },
        { label: "Positivo", value: "Positivo" },
        { label: "LG", value: "LG" },
        { label: "Asus", value: "Asus" },
    ];

    return (
        <div className="orcamento-form-overlay">
            <div className="orcamento-form">
                <IoMdClose className="iconClose" onClick={onClose} />
                <h2>Solicitar Orçamento</h2>
                <form>
                    <div className="input-item item-service">
                        <label htmlFor="service">Serviço: </label>
                        <input
                            type="text"
                            name="service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder='Serviço solicitado'
                        />
                    </div>

                    <div className="input-item">
                        <input
                            type="text"
                            name="name"
                            required
                            value={userData.name}
                            onChange={handleNameChange}
                            placeholder='Nome'
                        />
                    </div>

                    <div className="input-item">
                        <input
                            type="email"
                            name="email"
                            required
                            value={userData.email}
                            onChange={handleEmailChange}
                            placeholder='E-mail'
                        />
                    </div>

                    <div className="input-item">
                        <Select
                            classNamePrefix="form-select"
                            options={options}
                            placeholder="Modelo do aparelho"
                            styles={customStyles}
                        />
                    </div>
                    <div className="input-item">
                        <input
                            type="text"
                            placeholder='Digite especificamente qual o seu smartphone?'
                        />
                    </div>


                    <div className="input-item">
                        <textarea
                            name="description"
                            placeholder='Descreva especificamente o problema com seu Aparelho:'
                            required
                        ></textarea>
                    </div>


                    <button type="submit">Enviar Solicitação</button>
                </form>
            </div>
        </div>
    );
}
