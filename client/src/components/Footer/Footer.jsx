import React from "react";
import Logo from "../../assets/image-removebg-preview.png"
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h3>Technic Connect</h3>
                    </div>

                    <div className="icons-footer">
                        <RiInstagramFill className="icone" />
                        <RiLinkedinFill className="icone" />
                        <MdEmail className="icone" />
                    </div>
                </div>

                <div className="content-footer">
                    <div>
                        <h4>Páginas</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Serviços</a></li>
                            <li><a href="">Orçamento</a></li>
                            <li><a href="">Feed</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <ul>
                            <li><a href="">technicconnect@gmail.com</a></li>
                            <li><a href="">11 99999-9999</a></li>
                            <li><a href="">São Paulo, Brasil</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Last-footer">
                <p>Desenvolvido por grupo Technic Connect</p>
            </div>
        </>
    )
}

