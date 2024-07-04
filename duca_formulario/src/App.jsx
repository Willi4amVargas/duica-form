import { useState } from 'react'
import './App.css'
import FormBox from './components/FormBox'
import LoginPage from './components/LoginPage'

export default function App() {
  const [sesion, changeSesion]=useState(true)
  return (
    <>
    {sesion===true?
    <>
    <FormBox changeSesion={changeSesion}/>
    </>
    :
    <LoginPage changeSesion={changeSesion}/>  
    }
    </>
  )
}

