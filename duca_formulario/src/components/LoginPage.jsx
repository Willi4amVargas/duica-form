import "../App.css";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormTitle from "./FormTitle";
import FormBtn from "./FormBtn";
import { useState } from "react";

export default function LoginPage(props) {
    const [user, changeUser] = useState('');
    const [password, changePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const changeState = (event) => {
        if (event.target.name === "username") {
            changeUser(event.target.value);
        } else if (event.target.name === "password") {
            changePassword(event.target.value);
        }
    };

    const validar = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: user, password: password })
            });
            if (response.ok) {
                const data = await response.json();
                props.changeSesion(true);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
                changeUser("");
                changePassword("");
            }
        } catch (error) {
            console.error("Error en la solicitud de inicio de sesión", error);
            setErrorMessage("Error en la conexión con el servidor");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row pb-5 pt-5 px-0 justify-content-center">
                    <div className="col-lg-10 col-xs-12 text-center">
                        <form action="#" method="POST" onSubmit={validar} className="text-center">
                            <FormHeader 
                                srcImage1="./logo-white.png" 
                                altImg1="logo-blanco-DUICA"  
                            />
                            <div className="sombra indigo pt-2 pb-4 text-center">
                                <div className="col-12 text-center pt-3">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-lg-10 col-md-10 col-sm-9 col-9 text-center">
                                            <FormTitle>Inicio de Sesion</FormTitle>
                                            {errorMessage && <div className="error">{errorMessage}</div>}
                                            <FormInput 
                                                labelInput="Usuario" 
                                                titleInput="Usuario" 
                                                placeHolderInput="Usuario" 
                                                idInput="username" 
                                                inputType="text"
                                                inputValue={user}
                                                onChange={changeState}
                                            />
                                            <hr />
                                            <FormInput 
                                                labelInput="Contraseña" 
                                                titleInput="Contraseña del Usuario" 
                                                placeHolderInput="Ingrese la contraseña" 
                                                idInput="password" 
                                                inputType="password"
                                                inputValue={password}
                                                onChange={changeState}
                                            />
                                            <FormBtn idBtnForm="submit">Iniciar Sesion</FormBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
