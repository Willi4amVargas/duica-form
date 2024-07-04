import "../App.css"

export default function FormHeader({srcImage}) {
    return<>
        <div className="sombra bg-azul radio-titulo pt-4 pb-4 text-center">
            <img src={srcImage} alt="" width="20%" className="pt-2 pb-2 "/>
        </div>
    </>
}