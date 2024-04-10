import React, { useState, useEffect } from "react";
import Logo from "../../assets/image-removebg-preview.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const location = useLocation();

    // Define o estado do menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Efeito para fechar a navbar ao navegar para outra página
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Verifica se está na página de login ou na página de cadastro
    const isLoginPage = location.pathname === '/login';
    const isCadastroPage = location.pathname === '/cadastro';

    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="logo">
                    <a href="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>

                {!isLoginPage && !isCadastroPage && (
                    <div className="nav-list">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/servico" className="nav-link" activeClassName="active">
                                    Serviços
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/orcamento" className="nav-link" activeClassName="active">
                                    Orçamento
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/feed" className="nav-link" activeClassName="active">
                                    Feed
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="buttons">
                    {!isLoginPage && !isCadastroPage && (
                        <button style={{ backgroundColor: "#363636" }}>
                            <NavLink to="/login" className="btn1">
                                Login
                            </NavLink>
                        </button>
                    )}

                    {!isLoginPage && !isCadastroPage && (
                        <button style={{ backgroundColor: "#1e8efb" }}>
                            <NavLink to="/cadastro" className="btn3">
                                Cadastro
                            </NavLink>
                        </button>
                    )}
                </div>

                <div className="mobile-menu-icon">
                    {/* Renderização condicional do ícone do menu */}
                    {isMenuOpen ? (
                        <IoMdClose className="icon" onClick={toggleMenu} />
                    ) : (
                        <IoMdMenu className="icon" onClick={toggleMenu} />
                    )}
                </div>
            </nav>

            {/* Renderização condicional do menu móvel */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {!isLoginPage && !isCadastroPage && (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/servico" className="nav-link">
                                        Serviços
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/orcamento" className="nav-link">
                                        Orçamento
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/feed" className="nav-link">
                                        Feed
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    {!isLoginPage && !isCadastroPage && (
                        <div className="buttons">
                            <button style={{ backgroundColor: "#363636" }}>
                                <NavLink to="/login" className="btn1">
                                    Login
                                </NavLink>
                            </button>

                            <button style={{ backgroundColor: "#1e8efb" }}>
                                <NavLink to="/cadastro" className="btn3">
                                    Cadastro
                                </NavLink>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};
