import "../App.css"

export default function FormSelect({labelSelect, idInputSelect, arraySelect}) {
    return<>
    <div className="row mt-1 ml-3">
        <div className="col-lg-4 col-md-4 col-sm-12 align-self-center text-left pt-2">
            <label htmlFor={idInputSelect}><b>{labelSelect}:</b></label>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
            <select name={idInputSelect} id={idInputSelect} className="form-control casilla" >
                {arraySelect && arraySelect.map((option, index) => (
                    <option key={index} value={option.id}>{option.description}</option>
                ))}
            </select>
        </div>
    </div>
    </>
}