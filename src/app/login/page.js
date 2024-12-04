'use client'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '@/app/componentes/Firebase'
import { useRouter } from 'next/navigation'
import Moda_nacional from "../moda_nacional/page";

const app = initializeApp(firebaseConfig);
const auth = getAuth()


function login() {
  const router = useRouter()
  const [email,setEmail] = useState()
  const [senha,setSenha] = useState()

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      router.push(Moda_nacional)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    

  return (
    
    <div className='position-fixed top-0 bottom-0 bg-light z-2 container-fluid' style={{height:'100dvh'}}>
      <div style={{ width: 350, height: 350,boxShadow:"1px 1px 4px black" }} className="p-3 rounded d-flex flex-column justify-content-center row-gap-4 position-absolute top-50 start-50 translate-middle">
        <h5 className="text-black text-center">Grife Chic</h5>
        <h6 className="text-black text-center">Login</h6>
        <input type="email" placeholder="Email" className="form-control email"></input>
        <input type="password" placeholder="Senha" className="form-control senha"></input>

        <container className='d-flex flex-row justify-content-around align-items-center'>
          <div className="btn btn-dark" onClick={()=>{
            setEmail(document.querySelector('.email').value)
            setSenha(document.querySelector('.senha').value)
            document.querySelector('input').value= ''
            login();
          }}>Entrar</div>
          <a href="#" className="link link-primary">Criar conta</a>
        </container>
      </div>
    </div>
  )
}

export default login