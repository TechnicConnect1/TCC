import React from "react";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Login.css"

export const Login = () => {
    return (
        <div className="container">
            <div className="login-form">
                <form action="#">
                    <div className="form-header">
                        <h1>Login</h1>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Usuário" required />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                        <FaLock className="icon" />
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Já possui uma conta? <a href="">Cadastra-se</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}