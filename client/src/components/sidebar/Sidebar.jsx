import React, { useContext, useEffect, useRef } from 'react'
import "./Sidebar.scss"
import {
    MdOutlineAttachMoney,
    MdOutlineBarChart,
    MdOutlineClose,
    MdOutlineCurrencyExchange,
    MdOutlineGridView,
    MdOutlineLogout,
    MdOutlineMessage,
    MdOutlinePeople,
    MdOutlineSettings,
    MdOutlineShoppingBag,
} from "react-icons/md";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import { SidebarContext } from "../../context/SidebarContext"
import { StoreContext } from '../../context/StoreContext';
import { useDispatch } from 'react-redux';
import { signOut } from "../../redux/user/userSlice";

export const Sidebar = () => {
    const dispatch = useDispatch();

    const { isSideBarOpen, closeSidebar } = useContext(SidebarContext);
    const { token, setToken, userData, setUserData } = useContext(StoreContext);

    const navigate = useNavigate();

    const navbarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            navbarRef.current &&
            !navbarRef.current.contains(event.target) &&
            event.target.className !== "sidebar-open-btn"
        ) {
            closeSidebar();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_data")
        localStorage.removeItem("tecnico_data")
        setToken("");
        setUserData(null);
        dispatch(signOut());
        navigate("/");
    };

    const user_data = JSON.parse(localStorage.getItem("user_data"));

    return (

        <nav className={`sidebar ${isSideBarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>

            {/* sidebar top */}
            <div className="sidebar-top">
                <div className="sidebar-brand">
                    <img src={logo} alt="logo" className='logo' />
                    <span className="sidebar-brand-text">Technic Connect</span>
                </div>
                <button className='sidebar-close-btn' onClick={closeSidebar}><MdOutlineClose size={30} color='white' /></button>
            </div>

            <div className="sidebar-body">
                <div className="sidebar-menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink to="/dashboard" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineGridView size={30} color='white' /></span>

                                <span className="menu-link-text">Dashboard</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/feed-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineBarChart size={30} color='white' /></span>

                                <span className="menu-link-text">Feed</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/pagamento-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineAttachMoney size={30} color='white' /></span>

                                <span className="menu-link-text">Pagamento</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/orcamento-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineCurrencyExchange size={30} color='white' /></span>

                                <span className="menu-link-text">Orçamentos</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/servico-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineShoppingBag size={30} color='white' /></span>

                                <span className="menu-link-text">Serviços</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/profile-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlinePeople size={30} color='white' /></span>

                                <span className="menu-link-text">Perfil</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/chat-tecnico" className='menu-link' activeClassName="active">
                                <span className="menu-link-icon"><MdOutlineMessage size={30} color='white' /></span>

                                <span className="menu-link-text">Chat</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu sidebar-menu2">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink to="/" className='menu-link'>
                                <span className="menu-link-icon"><MdOutlineSettings size={30} color='white' /></span>
                                <span className="menu-link-text">Configurações</span>
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/" onClick={logout} className='menu-link'>
                                <span className="menu-link-icon"><MdOutlineLogout size={30} color='white' /></span>
                                <span className="menu-link-text">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}
