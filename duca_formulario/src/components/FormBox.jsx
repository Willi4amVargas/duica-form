import "../App.css";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormTitle from "./FormTitle";
import FormBtn from "./FormBtn";
import FormSelect from "./FormSelect";
import React from "react";
import { useState } from "react";

export default function FormBox(props) {
    const [formData, setFormData] = useState({
        nameClient: '',
        addressClient: '',
        rifClient: '',
        emailClient: '',
        telClient: '',
        contaClient: '',
        countryClient: '',
        provinceClient: '',
        cityClient: '',
        areaSalesClient: '',
        sellerClient: '',
        groupClient: '',
        typeClient: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implementar la lógica de envío del formulario aquí
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row pb-5 pt-5 px-0 justify-content-center">
                    <div className="col-lg-10 col-xs-12 text-center">
                        <form action="#" method="POST" onSubmit={handleSubmit} className="text-center">
                            <FormHeader srcImage="/logo.png" />
                            <div className="sombra indigo pt-2 pb-4 text-center">
                                <div className="col-12 text-center pt-3">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-lg-10 col-md-10 col-sm-9 col-9 text-center">
                                            <FormTitle>Datos del Cliente</FormTitle>
                                            {[
                                                { label: "Nombre", id: "nameClient", placeholder: "Nombre" },
                                                { label: "Direccion", id: "addressClient", placeholder: "Direccion" },
                                                { label: "Rif", id: "rifClient", placeholder: "RIF/Cedula" },
                                                { label: "Email", id: "emailClient", placeholder: "Direccion de correo electronico" },
                                                { label: "Telefono", id: "telClient", placeholder: "Numero de telefono" },
                                                { label: "Contacto", id: "contaClient", placeholder: "Contacto del cliente" },
                                                { label: "Area de Ventas", id: "areaSalesClient", placeholder: "Ingrese el area de ventas" },
                                                { label: "Vendedor", id: "sellerClient", placeholder: "Vendedor" },
                                                { label: "Grupo de Cliente", id: "groupClient", placeholder: "Ingrese el Grupo de Cliente" },
                                                { label: "Tipo de Cliente", id: "typeClient", placeholder: "Ingrese el tipo de cliente" }
                                            ].map(({ label, id, placeholder }) => (
                                                <div key={id}>
                                                    <FormInput 
                                                        labelInput={label} 
                                                        titleInput={label} 
                                                        placeHolderInput={placeholder} 
                                                        idInput={id} 
                                                        inputType="text"
                                                        inputValue={formData[id]}
                                                        onChange={handleChange}
                                                    />
                                                    <hr />
                                                </div>
                                            ))}
                                            <FormSelect 
                                                labelSelect="Pais"
                                                idInputSelect="countryClient"
                                                value={formData.countryClient}
                                                onChange={handleChange}
                                            />
                                            <hr />
                                            <FormSelect 
                                                labelSelect="Estado"
                                                idInputSelect="provinceClient"
                                                value={formData.provinceClient}
                                                onChange={handleChange}
                                            />
                                            <hr />
                                            <FormSelect 
                                                labelSelect="Ciudad"
                                                idInputSelect="cityClient"
                                                value={formData.cityClient}
                                                onChange={handleChange}
                                            />
                                            <hr />
                                            <FormBtn idBtnForm="submit">Agregar Cliente</FormBtn>
                                            <button onClick={() => props.changeSesion()}>TEST Regresar Login</button>
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
