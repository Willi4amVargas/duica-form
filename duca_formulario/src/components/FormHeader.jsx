import "../App.css"

export default function FormHeader({srcImage1, altImg1}) {
    return<>
        <div className="sombra bg-gray radio-titulo pt-2 pb-2 ">
            <img src={srcImage1} alt={altImg1} width="15%" className="pt-2 pb-2"/>
            {/* <img src={srcImage2} alt={altImg2} width="15%" className="pt-2 pb-2"/> */}
        </div>
    </>
}