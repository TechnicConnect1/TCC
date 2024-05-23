import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const [userData, setUserData] = useState("");
    const [tecnicoData, setTecnicoData] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, []);

    const login = (newData, isTecnico) => {
        if (isTecnico) {
            localStorage.setItem(
                "tecnico_data",
                JSON.stringify({ tecnico: newData })
            );
            setTecnicoData(newData);
        } else {
            localStorage.setItem(
                "user_data",
                JSON.stringify({ user: newData })
            );
            setUserData(newData);
        }
    };

    useEffect(() => {
        if (token) {
            const storedUserData = JSON.parse(localStorage.getItem("user_data"));
            const storedTecnicoData = JSON.parse(localStorage.getItem("tecnico_data"));
            if (storedUserData) {
                const { user } = storedUserData;
                setUserData(user);
            }
            if (storedTecnicoData) {
                const { tecnico } = storedTecnicoData;
                setTecnicoData(tecnico);
            }
        }
    }, []); // Executar sempre que o token mudar

    const contextValue = {
        url,
        token,
        setToken,
        login,
        userData,
        setUserData,
        tecnicoData,
        setTecnicoData,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
