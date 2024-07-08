import {  useState } from 'react'
import './App.css'
import FormBox from './components/FormBox'
import LoginPage from './components/LoginPage'
import SpinnerLoad from './components/SpinnerLoad'


export default function App() {
  const [userLogged, changeUserLogged] = useState('');
  const [sesion, changeSesion]=useState(false)
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSesionChange = (newSesion) => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      changeSesion(newSesion);
    }, 1000);
  };


  const reciveUserLogged=(data)=>{
    changeUserLogged(data)
  }
  return (
    <>
    {showSpinner ? (
        <div className="spinner-overlay">
          <SpinnerLoad />
        </div>
      ) : (
        sesion ? (
          <div className="align-items-center minh-100">
            <FormBox changeSesion={handleSesionChange} adminUser={userLogged} />
          </div>
        ) : (
          <div className="row justify-content-center align-items-center minh-100">
            <div className='col-10'>
            <LoginPage changeSesion={handleSesionChange} sendData={reciveUserLogged} />
            </div>
          </div>
        )
      )}
    </>
  )
}

