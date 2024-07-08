import {  useState } from 'react'
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
    {
    sesion===true?
    <>
    <div className=' align-items-center minh-100'>
      <FormBox changeSesion={changeSesion} adminUser={userLogged}/>
    </div>
    </>
    :
    <div className='row justify-content-center align-items-center minh-100'>
        <LoginPage changeSesion={changeSesion} sendData={reciveUserLogged}/>
    </div>
    }
    </>
  )
}

