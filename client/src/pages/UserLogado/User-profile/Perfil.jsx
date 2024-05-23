import React, { useEffect, useState } from 'react'
import "./Perfil.css"
import { Profile } from '../../../components/UserProfile/Profile';
import axios from 'axios';

export const Perfil = ({ token }) => {
    const user_data = JSON.parse(localStorage.getItem("user_data"));

    return (
        <>
            <section className="perfil">
                <div className="container-perfil">
                    <div className="perfil-left">
                        <Profile />
                    </div>

                    <div className="config">
                        <div className="conta">
                            <h3>Conta</h3>
                            <div className="conta-content">
                                <p>{user_data.email}</p>
                                <span className='contaSpan'>Clique aqui para alterar o email</span>
                            </div>

                            <div className='line'>
                                <hr />
                            </div>


                            <div className="conta-content">
                                <p>{user_data.telefone}</p>
                                <span className='contaSpan'>Clique aqui para alterar o telefone</span>
                            </div>
                        </div>

                        <div className="configuracoes">
                            <h3>Configurações</h3>
                            <div className="configuracoes-content">
                                <p>Privacidade e segurança</p>
                            </div>

                            <div className='line'>
                                <hr />
                            </div>

                            <div className="configuracoes-content">
                                <p>Gerenciamento de conta</p>
                            </div>

                            <div className='line'>
                                <hr />
                            </div>

                            <div className="configuracoes-content">
                                <p>Histórico de atividade</p>
                            </div>

                            <div className='line'>
                                <hr />
                            </div>

                            <div className="configuracoes-content">
                                <p>Configurações de privacidade de mensagem</p>
                            </div>

                            <div className='line'>
                                <hr />
                            </div>

                            <div className="configuracoes-content">
                                <p>Notificações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
