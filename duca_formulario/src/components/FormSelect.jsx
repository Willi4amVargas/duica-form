import "../App.css"

export default function FormSelect({labelSelect, idInputSelect}) {
    return<>
    <div className="row mt-1 ml-3">
        <div className="col-md-4 col-12 align-self-center text-left pt-2">
            <label htmlFor={idInputSelect}><b>{labelSelect}:</b></label>
        </div>
        <div className="col-md-4 col-12">
            <select name={idInputSelect} id={idInputSelect} className="form-control casilla" >
                <option value="">Seleccione...</option>
                <option value="A">Activo</option>
                <option value="I">Inactivo</option>
            </select>
        </div>
    </div>
    </>
}