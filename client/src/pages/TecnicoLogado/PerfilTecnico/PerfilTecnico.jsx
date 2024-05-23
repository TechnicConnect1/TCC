import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import "./PerfilTecnico.css";
import { Sidebar } from '../../../components/sidebar/Sidebar';
import nouser from "../../../../src/assets/images/user-icon.png";
import { FaUser } from "react-icons/fa";
import { StoreContext } from '../../../context/StoreContext';
import StarRating from "../../../components/Stars/StarRating";
export const PerfilTecnico = () => {
    return (
        <main className='page-wrapper'>
            <Sidebar />
            <div className="content-wrapper">
                <div className="perfil-tecnico-2">
                    <h1>Perfil do <span>Técnico</span></h1>

                    <p>Manter seu perfil atualizado é crucial para destacar suas habilidades e experiências. Adicione uma foto profissional clara para causar uma boa impressão e facilitar o reconhecimento. Atualize regularmente suas informações de contato, formação acadêmica e experiências profissionais, incluindo suas últimas certificações e cursos. </p>
                    <div className="perfil-tecnico-container-2">

                        <div className="profile-img">
                            <FaUser className='icon' />
                        </div>


                        <div className="dados-tecnico-2">
                            <div className="dados-tecnico-container-2">
                                <h2>Sobre o Técnico</h2>
                                <div className="dados-tecnico-content">
                                    <span className="label">Nome Completo:</span>
                                    <span className="resposta">Rafael Ferreira de Oliveira</span>
                                </div>

                                <div className="dados-tecnico-content">
                                    <span className="label">Email:</span>
                                    <span className="resposta">rafaelferreiraoliveira288@gmail.com</span>
                                </div>

                                <div className="dados-tecnico-content">
                                    <span className="label">Telefone:</span>
                                    <span className="resposta">11945215545</span>
                                </div>

                                <div className="dados-tecnico-content">
                                    <span className="label">Nome Completo:</span>
                                    <span className="resposta">Rafael Ferreira de Oliveira</span>
                                </div>
                            </div>

                            <div className="dados-negocio-container">
                                <h2>Sobre o negócio</h2>
                                <div className="dados-negocio-content">
                                    <span className="label">Nome do Negócio: </span>
                                    <span className="resposta">ConcertCell</span>
                                </div>

                                <div className="dados-negocio-content">
                                    <span className="label">CNPJ: </span>
                                    <span className="resposta">11111111111111</span>
                                </div>

                                <div className="dados-negocio-content">
                                    <span className="label">Especialidade do Negócio: </span>
                                    <span className="resposta">Smartphones em geral</span>
                                </div>
                            </div>
                            
                            <div className="btn-update-user">
                                <button>Atualizar Perfil</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
};
