import "../App.css"

export default function FormBtn({children,idBtnForm}) {
    return<>
    <div className="row mt-3 justify-content-center">
        <div className="col-lg-12 col-12  text-center">
            <button id={idBtnForm} className="btn btn-aquamarine-hover btn-negrita cursor bg-aquamarine" >{children}</button>
        </div>
    </div>
    </>
}