import {  useEffect, useState } from 'react'
import './App.css'
import FormBox from './components/FormBox'
import LoginPage from './components/LoginPage'

export default function App() {
  const [userLogged, changeUserLogged] = useState('');
  const [sesion, changeSesion]=useState(false)

  const reciveUserLogged=(data)=>{
    changeUserLogged(data)
  }
  return (
    <>
    {sesion===true?
    <>
    <FormBox changeSesion={changeSesion} adminUser={userLogged}/>
    </>
    :
    <LoginPage changeSesion={changeSesion} sendData={reciveUserLogged}/>  
    }
    </>
  )
}

