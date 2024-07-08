import "../App.css";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormTitle from "./FormTitle";
import FormBtn from "./FormBtn";
import FormSelect from "./FormSelect";
import AlertDissmisable from "./AlertDissmisable";
import {  useEffect, useState } from 'react'
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
        sellerClient: props.adminUser,
        groupClient: '',
        typeClient: ''
    });
    const[alertState,setAlertState]=useState(false)


    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
        validateField(id, value);
    };

    const validateField = (field, value) => {
        let errorMsg = '';

        if (!value.trim()) {
            errorMsg = 'Este campo es obligatorio';
        } else {
            switch (field) {
                case 'emailClient':
                    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                        errorMsg = 'Email no válido';
                    }
                    break;
                default:
                    break;
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: errorMsg
        }));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const newErrors = {};
        
        Object.keys(formData).forEach((field) => {
            validateField(field, formData[field]);
            if (!formData[field].trim()) {
                newErrors[field] = 'Este campo es obligatorio';
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (Object.keys(newErrors).length === 0) {
                try {
                    const response = await fetch('http://localhost:3001/api/addClient', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setFormData({
                            nameClient:'', 
                            addressClient:'', 
                            rifClient:'', 
                            emailClient:'', 
                            telClient:'', 
                            contaClient:'', 
                            countryClient:'', 
                            provinceClient:'', 
                            cityClient:'', 
                            areaSalesClient:'', 
                            sellerClient:props.adminUser, 
                            groupClient:'', 
                            typeClient:''
                        })
                        setAlertState(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setTimeout(() => {
                            setAlertState(false)
                        }, 2300)
                    } else {
                        const errorData = await response.json();
                        alert(errorData.message);
                    }
                } catch (error) {
                    console.error("Error en la solicitud:", error);
                    alert("Error en la conexión con el servidor");
                }
            }
        }
    };

    //Objetos de los Paises, Estados y Ciudades
    const [provinces,changeProvinces]=useState([])
    const [countrys,changeCountrys]=useState([])
    const [citys,changeCitys]=useState([])

    //Buscar las provincias
    const fetchProvinces = async()=>{
      try{
        const response=await fetch('http://localhost:3001/api/readProvince')
        if (!response.ok) {
          throw new Error('Error al obtener los datos del servidor!!!')
        }
        const data= await response.json()
        changeProvinces(data)
      }catch(error){
        console.log("Error al obtener los estados!!")
      }
    }
  
    useEffect(()=>{
      fetchProvinces()
    },[])

    //Buscar los Paises
    const fetchCountrys = async()=>{
        try{
          const response=await fetch('http://localhost:3001/api/readCountry')
          if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor!!!')
          }
          const data= await response.json()
          changeCountrys(data)
        }catch(error){
          console.log("Error al obtener los paises!!")
        }
      }
    
      useEffect(()=>{
        fetchCountrys()
      },[])

      //Buscar las ciudades
      const fetchCitys = async()=>{
        try{
          const response=await fetch('http://localhost:3001/api/readCity')
          if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor!!!')
          }
          const data= await response.json()
          changeCitys(data)
        }catch(error){
          console.log("Error al obtener las ciudades!!")
        }
      }
    
      useEffect(()=>{
        fetchCitys()
      },[])
    return (
        <>
            <div className="container-fluid">
                <div className="row pb-5 pt-5 px-0 justify-content-center">
                    <div className="col-lg-10 col-xs-12 text-center">
                        {alertState && (
                            <AlertDissmisable
                            footerAlert="Cliente agregado con exito"
                            headerAlert="Agregado"
                            />
                        )}
                        
                            <FormHeader 
                                srcImage1="./logo-white.png" 
                                altImg1="logo-blanco-DUICA"   
                            />
                            <div className="sombra indigo pt-2 pb-4 text-center">
                                <div className="col-12 text-center pt-3">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-lg-10 col-md-10 col-sm-9 col-9 text-center"> 
                                        <form onSubmit={handleSubmit} className="text-center">
                                            <FormTitle>Datos del Cliente</FormTitle>
                                            <FormInput
                                                labelInput="Vendedor" 
                                                titleInput="Nombre del vendedor" 
                                                placeHolderInput={props.adminUser} 
                                                idInput="sellerClient" 
                                                inputType="text"
                                                inputValue={props.adminUser}
                                                disable
                                                onChange={handleChange}
                                            />
                                            <hr/>
                                            {[
                                                { label: "Nombre", id: "nameClient", placeholder: "Nombre" },
                                                { label: "Dirección", id: "addressClient", placeholder: "Dirección" },
                                                { label: "Rif", id: "rifClient", placeholder: "RIF/Cédula" },
                                                { label: "Email", id: "emailClient", placeholder: "Dirección de correo electrónico" },
                                                { label: "Teléfono", id: "telClient", placeholder: "Número de telefono" },
                                                { label: "Contacto", id: "contaClient", placeholder: "Contacto del cliente" },
                                                { label: "Área de Ventas", id: "areaSalesClient", placeholder: "Ingrese el area de ventas" },
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
                                                        error={errors[id]}
                                                    />
                                                    {errors[id] && <div className="error">{errors[id]}</div>}
                                                    <hr />
                                                </div>
                                            ))}
                                            <FormSelect 
                                                labelSelect="País"
                                                idInputSelect="countryClient"
                                                value={formData.countryClient}
                                                onChange={handleChange}
                                                arraySelect={countrys}
                                            />
                                            <hr />
                                            <FormSelect 
                                                labelSelect="Estado"
                                                idInputSelect="provinceClient"
                                                value={formData.provinceClient}
                                                onChange={handleChange}
                                                arraySelect={provinces}
                                            />
                                            <hr />
                                            <FormSelect 
                                                labelSelect="Ciudad"
                                                idInputSelect="cityClient"
                                                value={formData.cityClient}
                                                onChange={handleChange}
                                                arraySelect={citys}
                                            />
                                            <hr />

                                                <FormBtn idBtnForm="sending" type="submit">Agregar Cliente</FormBtn>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                    <div className="row pb-4 pt-2 justify-content-center">
                        <div className="col-12 col-md-5 col-sm-6 text-center">
                            <button 
                                onClick={()=>props.changeSesion(false)} id="close-sesion" className="btn btn-hover-red cursor bg-aquamarine" >Cerrar Sesión
                            </button>
                        </div>                 
                    </div>
            </div>
        </>
    );
}
