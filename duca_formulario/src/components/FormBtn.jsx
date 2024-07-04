import "../App.css"

export default function FormBtn({children}) {
    return<>
    <div className="row mt-5">
        <div className="col-12  text-center">
            <button id="botonValida" className="btn btn-md btn-negrita cursor bg-azul" >{children}</button>
        </div>
    </div>
    </>
}