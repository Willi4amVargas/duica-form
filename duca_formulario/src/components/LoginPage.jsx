import "../App.css";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormTitle from "./FormTitle";
import FormBtn from "./FormBtn";
import { useState } from "react";

export default function LoginPage(props) {
    const [user, changeUser] = useState('');
    const [password, changePassword] = useState('');
    
    const changeState = (event) => {
        if (event.target.name === "username") {
            changeUser(event.target.value);
        } else if (event.target.name === "password") {
            changePassword(event.target.value);
        }
    }

    const validar = (event) => {
        event.preventDefault();
        if (user === "admin" && password === "admin") {
            props.changeSesion(true);
        } else {
            alert("Datos Incorrectos");
            changeUser("");
            changePassword("");
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row pb-5 pt-5 px-0 justify-content-center">
                    <div className="col-lg-10 col-xs-12 text-center">
                        <form action="#" method="POST" onSubmit={validar} className="text-center">
                            <FormHeader srcImage="../../public/reeact-logo.svg" />
                            <div className="sombra indigo pt-2 pb-4 text-center">
                                <div className="col-12 text-center pt-3">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-lg-10 col-md-10 col-sm-9 col-9 text-center">
                                            <FormTitle>Inicio de Sesion</FormTitle>
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
