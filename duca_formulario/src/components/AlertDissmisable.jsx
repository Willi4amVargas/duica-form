import "../App.css"

export default function AlertDissmisable({footerAlert,headerAlert}) {
    return<>
    <div className="alert alert-success m-3 p-3 alert-dismissible fade show">
        <h3>{headerAlert}</h3>
        <hr/>
        {footerAlert}
    </div> 
</>
}