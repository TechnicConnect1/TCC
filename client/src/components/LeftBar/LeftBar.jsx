import React from "react";
import { IoIosChatboxes, IoMdSettings } from "react-icons/io";
import { FaUser, FaHistory } from "react-icons/fa";
import "./LeftBar.css"
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const LeftBar = () => {
    const { currentUser } = useSelector((state) => state.user);

    return <aside id="leftbar" className="leftbar">
        <ul className="sidebar-nav">
            <div className="imagem-perfil">
                <div className="icone-avatar">
                    <img src={currentUser.profilePicture} alt="" className="icone-avatar"/>
                </div>

                <div className="name-user">
                    <span className="user-name">
                        Rafael Ferreira de Oliveira
                    </span>

                </div>
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-menu-item">
                    <FaUser className="side-bar-icon"/>
                    <li><Link to="/perfil">Perfil</Link></li>
                </div>


                <div className="sidebar-menu-item">
                    <IoIosChatboxes className="side-bar-icon"/>
                    <li><Link to="/chat">Chat</Link></li>
                </div>

                <div className="sidebar-menu-item">
                    <IoMdSettings className="side-bar-icon"/>
                    <li><Link to="/perfil">Configurações</Link></li>
                </div>

                <div className="sidebar-menu-item">
                    <FaHistory className="side-bar-icon"/>
                    <li><Link to="/perfil">Histórico de Serviços</Link></li>
                </div>
            </div>

        </ul>
    </aside>
}