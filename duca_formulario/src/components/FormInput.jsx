import "../App.css"

export default function FormInput({labelInput, titleInput, placeHolderInput, idInput, inputType, inputValue, onChange, error}) {
    return<>
    <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 align-self-center text-left pt-2 pb-2 ">
            <label 
                htmlFor={idInput}
            >
                <b>{labelInput}</b>
            </label>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
            <input 
                type={inputType} 
                name={idInput} 
                id={idInput} 
                placeholder={placeHolderInput} 
                title={titleInput}
                className="form-control casilla"
                value={inputValue}
                onChange={onChange}
                autoComplete="off"
            />
            
        </div>
    </div>
    </>
}