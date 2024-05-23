import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Update } from "../Update/Update";
import "./Profile.css";

export const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelEdit = () => {
        setEditing(false);
    };

    return (
        <>
            <div className="container-profile">
                <div className="card-profile">
                    <div className="profile-data">
                        <div className="img-perfil">
                           <img src={currentUser.profilePicture} alt="" className="img-perfil"/>
                        </div>
                        <div className="username">
                            <h2 className="user-name">{currentUser.name}</h2>
                        </div>
                    </div>
                    <div className="content-profile">
                        <div className="dados">
                            <MdEmail className="icon" />
                            <p className="email-user">{currentUser.email}</p>
                        </div>
                        <div className="dados">
                            <BsFillTelephoneFill className="icon" />
                            <p className="tel-user">{currentUser.telefone}</p>
                        </div>
                    </div>
                    <button className="btn-edit" onClick={handleEditClick}>
                        Atualizar Perfil
                    </button>
                </div>
            </div>
            {editing && <Update onCancel={handleCancelEdit} />}
        </>
    );
};
