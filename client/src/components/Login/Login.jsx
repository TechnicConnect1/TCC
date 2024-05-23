import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { toast } from "react-toastify";
import Select from "react-select";
import { StoreContext } from "../../context/StoreContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import nouser from "../../assets/images/user-icon.png";
import { useDispatch } from 'react-redux'; // Adicione esta importação
import { signInSuccess } from "../../redux/user/userSlice";

export const Login = ({ setShowLogin }) => {
    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState(null);
    const [isProfessional, setIsProfessional] = useState(false);
    const [userImage, setUserImage] = useState(null);

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefone: "",
        password: "",
        modeloAparelho: null,
    });

    const [tecnicoData, setTecnicoData] = useState({
        nomeTecnico: "",
        emailTecnico: "",
        senhaTecnico: "",
        cnpj: "",
        dataNascimento: "",
        telefoneTecnico: "",
        nomeNegocio: "",
        endereco: "",
        especializacao: ""
    });

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

    const navigate = useNavigate();

    const { url, setToken, setUserData: setUserContextData } = useContext(StoreContext);

    const [currState, setCurrState] = useState("Login");

    const toggleProfessionalForm = () => {
        setIsProfessional(!isProfessional);
        setCurrState("Cadastro Profissional");
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onTecnicoChangeHandler = (event) => {
        const { name, value } = event.target;
        setTecnicoData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setUserData((prevData) => ({ ...prevData, modeloAparelho: selectedOption.value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        let dataToSend = userData;
        let destinationPage = "/user";

        const isTecnico = Object.values(tecnicoData).some(val => val !== "");

        if (isTecnico) {
            newUrl += "/api/user/register-tecnico";
            dataToSend = tecnicoData;
            destinationPage = "/dashboard";
        } else if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        try {
            console.log("Enviando dados para:", newUrl);
            console.log("Dados enviados:", dataToSend);

            const response = await axios.post(newUrl, dataToSend);

            console.log("Resposta do servidor:", response);

            if (response.data.success) {
                console.log("Login ou cadastro bem-sucedido!");

                dispatch(signInSuccess(response.data.user));

                if (response.data.userType === "tecnico") {
                    destinationPage = "/dashboard";
                }

                if (isTecnico) {
                    localStorage.setItem("tecnico_data", JSON.stringify(response.data.tecnico));
                    localStorage.removeItem("user_data");
                    setTecnicoData({
                        nomeTecnico: "",
                        emailTecnico: "",
                        senhaTecnico: "",
                        cnpj: "",
                        dataNascimento: "",
                        telefoneTecnico: "",
                        nomeNegocio: "",
                        endereco: "",
                        especializacao: ""
                    });
                } else {
                    localStorage.setItem("user_data", JSON.stringify(response.data.user));
                    localStorage.removeItem("tecnico_data");
                }

                navigate(destinationPage);
                const successMessage = currState === "Login" ? "Login bem-sucedido!" : "Usuário cadastrado com sucesso!";
                toast.success(successMessage, { position: 'top-center' });

                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
            } else {
                console.log("Erro no login ou cadastro:", response.data.message);
                toast.error(response.data.message, { position: 'top-center' });
            }
        } catch (error) {
            console.error("Erro ao fazer login ou cadastro:", error);
            toast.error("Erro no servidor", { position: 'top-center' });
        }
    };
   
    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <IoMdClose className="iconClose-2" onClick={() => setShowLogin(false)} />
                </div>

                {currState === "Login" || currState === "Cadastro Profissional" ? null : (
                    <p className="profissional">
                        <span onClick={toggleProfessionalForm}>Sou um profissional</span>
                    </p>
                )}

                <div className="login-popup-inputs">
                    {currState === "Login" || currState === "Cadastro Profissional" ? null : (
                        <input type="text" name="name" placeholder="Nome completo" onChange={onChangeHandler} value={userData.name} required />
                    )}
                    {currState === "Cadastro Profissional" ? null : (
                        <input type="email" name="email" onChange={onChangeHandler} value={userData.email} placeholder="E-mail" required />
                    )}

                    {currState === "Login" || currState === "Cadastro Profissional" ? null : (
                        <input type="tel" name="telefone" onChange={onChangeHandler} value={userData.telefone} placeholder="Telefone" required />
                    )}

                    {currState === "Login" || currState === "Cadastro Profissional" ? null : (
                        <Select
                            classNamePrefix="form-select"
                            options={options}
                            value={selectedOption}
                            onChange={handleSelectChange}
                            placeholder="Modelo do aparelho"
                            styles={customStyles}
                        />
                    )}

                    {currState === "Cadastro Profissional" ? null : (
                        <input type="password" name="password" onChange={onChangeHandler} value={userData.password} placeholder="Senha" required />
                    )}

                    {currState === "Cadastro Profissional" && (
                        <div className="flex-box">
                            <div className="tecnico">
                                <h4>Sobre o técnico</h4>
                                <input type="text" name="nomeTecnico" placeholder="Nome completo" onChange={onTecnicoChangeHandler} value={tecnicoData.nomeTecnico} required />
                                <input type="email" name="emailTecnico" placeholder="E-mail" onChange={onTecnicoChangeHandler} value={tecnicoData.emailTecnico} required />

                                <div className="flex">
                                    <input type="tel" name="telefoneTecnico" id="tel" placeholder="Telefone" onChange={onTecnicoChangeHandler} value={tecnicoData.telefoneTecnico} required />
                                    <input type="date" name="dataNascimento" id="date" placeholder="Data de Nascimento" onChange={onTecnicoChangeHandler} value={tecnicoData.dataNascimento} required />
                                </div>

                                <input type="password" name="senhaTecnico" placeholder="Senha" onChange={onTecnicoChangeHandler} value={tecnicoData.senhaTecnico} required />
                            </div>

                            <div className="negocio">
                                <h4>Sobre o negócio</h4>
                                <input type="text" name="nomeNegocio" placeholder="Nome do Negócio" onChange={onTecnicoChangeHandler} value={tecnicoData.nomeNegocio} required />
                                <input type="text" name="cnpj" placeholder="CNPJ do Negócio" onChange={onTecnicoChangeHandler} value={tecnicoData.cnpj} required />
                                <input type="text" name="endereco" placeholder="Endereço do Negócio" onChange={onTecnicoChangeHandler} value={tecnicoData.endereco} required />
                                <input type="text" name="especializacao" placeholder="Especialização do Negócio" onChange={onTecnicoChangeHandler} value={tecnicoData.especializacao} required />
                            </div>
                        </div>
                    )}
                </div>

                <button type="submit">{currState === "Cadastro" || currState === "Cadastro Profissional" ? "Criar Conta" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" className="checkbox-input" required />
                    <p>Eu li e concordo com os termos e condições</p>
                </div>

                {currState === "Login" ? (
                    <p>
                        Criar uma nova conta?{" "}
                        <span onClick={() => setCurrState("Cadastro")}>Clique aqui</span>{" "}
                    </p>
                ) : (
                    <p>
                        Já possui uma conta?{" "}
                        <span onClick={() => setCurrState("Login")}>Faça Login</span>{" "}
                    </p>
                )}
            </form>
        </div>
    );
};


                
                
                   
