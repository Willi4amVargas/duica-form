import "../App.css"
import FormHeader from "./FormHeader"
import FormInput from "./FormInput"
import FormTitle from "./FormTitle"
import FormBtn from "./FormBtn"
import FormSelect from "./FormSelect"

export default function FormBox(props) {
    return<>
    <div className="container-fluid">
	<div className="row pb-5 pt-5 px-0 justify-content-center">
		<div className="col-lg-10 col-xs-12 text-center">
			<form action="#" method="POST" className="text-center">
                <FormHeader srcImage="/reeact-logo.svg"/>
				<div className="sombra indigo pt-2 pb-4 text-center">
					<div className="col-12 text-center pt-3">
						<div className="row justify-content-center text-center">
							<div className="col-lg-10 col-md-10 col-sm-9 col-9 text-center">
                            <FormTitle>Datos del Cliente</FormTitle>
                            <FormInput 
                                labelInput="Nombre" 
                                titleInput="Descripcion" 
                                placeHolderInput="Descripcion" 
                                idInput="nameClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Direccion" 
                                titleInput="Direccion" 
                                placeHolderInput="Direccion" 
                                idInput="addressClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Rif" 
                                titleInput="Rif" 
                                placeHolderInput="RIF/Cedula" 
                                idInput="rifClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Email" 
                                titleInput="Email" 
                                placeHolderInput="Direccion de correo electronico" 
                                idInput="emailClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Telefono" 
                                titleInput="Telefono" 
                                placeHolderInput="Numero de telefono" 
                                idInput="telClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Contacto" 
                                titleInput="Contacto del cliente" 
                                placeHolderInput="Contacto del cliente" 
                                idInput="contaClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Direccion" 
                                titleInput="Direccion" 
                                placeHolderInput="Ingrese una direccion" 
                                idInput="addressClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormSelect 
                                labelSelect="Pais"
                                idInputSelect="countryClient"
                            />
                            <hr />
                            <FormSelect 
                                labelSelect="Estado"
                                idInputSelect="provinceClient"
                            />
                            <hr />
                            <FormSelect 
                                labelSelect="Ciudad"
                                idInputSelect="cityClient"
                            />
                            <hr />
                            <FormInput 
                                labelInput="Area de Ventas" 
                                titleInput="Area de Ventas" 
                                placeHolderInput="Ingrese el area de ventas" 
                                idInput="areaSalesClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Vendedor" 
                                titleInput="Vendedor" 
                                placeHolderInput="Vendedor" 
                                idInput="sellerClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Grupo de Cliente" 
                                titleInput="Grupo de Cliente" 
                                placeHolderInput="Ingrese el Grupo de Cliente" 
                                idInput="groupClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <hr />
                            <FormInput 
                                labelInput="Tipo de Cliente" 
                                titleInput="Tipo de Cliente" 
                                placeHolderInput="Ingrese el tipo de cliente" 
                                idInput="typeClient" 
                                inputType="text"
                                inputValue=""
                            />
                            <FormBtn idBtnForm="submit">Agregar Cliente</FormBtn>
                            <button onClick={()=>props.changeSesion()}>TEST</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
    </>
}