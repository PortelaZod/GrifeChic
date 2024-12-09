'use client'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../componentes/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react"
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/app/componentes/Firebase'
import Moda_nacional from "../camisetas_nacionais/page";

const app = initializeApp(firebaseConfig);
const auth = getAuth()



function login() {


  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  function log() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {

        const user = userCredential.user;



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Usuário ou senha invalida')
      });
  }



  return (

    <div className='position-fixed top-0 bottom-0 bg-light z-2 container-fluid' style={{ height: '100dvh' }}>
      <div style={{ width: 350, height: 350 }} className="p-3 d-flex flex-column justify-content-center row-gap-4 position-absolute top-50 start-50 translate-middle">
        <h5 className="text-black text-center">Grife Chic</h5>
        <h6 className="text-black text-center">Login</h6>
        <input type="email" placeholder="Email" className="form-control email"></input>
        <input type="password" placeholder="Senha" className="form-control senha"></input>

        <div className='d-flex flex-row justify-content-around align-items-center'>
          <div className="btn btn-dark" onClick={() => {
            setEmail(document.querySelector('.email').value)
            setSenha(document.querySelector('.senha').value)
            document.querySelector('input').value = ''
            log();
          }}>Entrar</div>
          <a href="#" className="link link-primary">Criar conta</a>
        </div>
      </div>
    </div>
  )
}

export default login