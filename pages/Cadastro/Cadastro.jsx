import React, { useEffect } from "react";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Cadastro.css"
import { useLocation } from "react-router-dom";

export const Cadastro = () => {
    const location = useLocation();

    // Verifica se está na página de login ou na página de cadastro
    const isLoginPage = location.pathname === '/login';
    const isCadastroPage = location.pathname === '/cadastro';

    return (
        <div className="container">
            <div className="login-form">
                <form action="#">
                    <div className="form-header">
                        <h1>Cadastro</h1>
                        <a href="#">Sou um profissional</a>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Nome completo" required />
                        <FaUser className="icon" />
                    </div>


                    <div className="input-box">
                        <input type="email" placeholder="E-mail" required />
                        <MdEmail className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="tel" placeholder="Telefone" required />
                        <FaPhoneAlt className="icon" />
                    </div>


                    {/* <div className="input-box">
                        
                    </div> */}

                    <div className="input-box">
                        <input type="password" placeholder="Crie uma senha" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Confirmar senha" required />
                        <FaLock className="icon" />
                    </div>

                    <button type="submit">Cadastrar</button>

                    <div className="register-link">
                        <p>Já possui uma conta? <a href="">Faça login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}