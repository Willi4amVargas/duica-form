import "../App.css"

export default function FormHeader({srcImage}) {
    return<>
        <div className="sombra bg-azul radio-titulo pt-2 pb-2">
            <img src={srcImage} alt="img-logo-DUICA" width="15%" className="pt-2 pb-2 "/>
        </div>
    </>
}