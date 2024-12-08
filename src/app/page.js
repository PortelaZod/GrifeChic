'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCards from './componentes/Item-cards.js';
import Label from './componentes/label-block.js';
import Navbar from './componentes/navbar.js';
import { db } from './componentes/Firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const grifeChicDb = await getDocs(collection(db, 'grife_chic'))
export default function Home() {

  function firebaseDados() {
    let dados = []
    grifeChicDb.forEach(e => {
      dados.push(e.data())
    });
    return dados;
  }

  useEffect(() => {
    setDados(firebaseDados())
  }, [])

  const [dados, setDados] = useState([])
  const nacional = dados.filter(e => e.colecao == "NACIONAL")
  const imp = dados.filter(e => e.colecao == "IMPORTADAS_PERUANAS")
  const if40 = dados.filter(e => e.colecao == "IMPORTADAS_40.01")
  const cp = dados.filter(e => e.colecao == "CAMISETAS_POLO")
  const bs = dados.filter(e => e.colecao == "BERMUDAS_E_SHORTS")
  const ps = dados.filter(e => e.plus == true)

  return (
    <div>
      <Label label='Camisetas Nacionais'></Label>
      <div className='overFlowContainer mb-3'>
        <div className='row_ ms-2'>
          {nacional.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Importadas Malha Peruana' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {imp.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Importadas Fio 40.1' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {if40.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Camisetas Polo' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {cp.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Moda Plus Size' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {ps.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Bermudas e Shorts' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2 mb-5'>
          {bs.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

    </div >
  );

}


