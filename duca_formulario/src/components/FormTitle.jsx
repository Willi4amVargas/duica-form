import "../App.css"

export default function FormTitle({children}) {
    return<>
    <div className="row mt-1 mb-1">
        <div className="col-md-12 col-12 align-self-center text-center">
            <h2 className="miTitulo">{children}</h2>
        </div>
    </div>
    </>
}