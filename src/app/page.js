'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCards from './componentes/Item-cards.js';
import Label from './componentes/label-block.js';
import Navbar from './componentes/navbar.js';
import { db } from './componentes/Firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const NACIONAL = await getDocs(collection(db,'NACIONAL'))


export default function Home() {
  
  function firebaseDados(){
    let dados = []
    NACIONAL.forEach(e => {
      dados.push(e.data())
    });
    return dados;
  }

  const [dados,setDados] = useState([])

  useEffect(()=>{
    setDados(firebaseDados())
  },[])

  return (
    <div>
      <Label label='Nacionais'></Label>
      <div className='grid'>
        {dados.map(e => {
          return (
            <ItemCards nome={e.nome} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>
    </div>
  );

}


