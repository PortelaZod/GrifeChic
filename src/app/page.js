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

  const [dados, setDados] = useState([])
  const nacional = dados.filter(e => e.colecao == "NACIONAL")
  const imp = dados.filter(e => e.colecao == "IMPORTADAS_PERUANAS")
  const if40 = dados.filter(e => e.colecao == "IMPORTADAS_40.01")
  const cp = dados.filter(e => e.colecao == "CAMISETAS_POLO")
  const bs = dados.filter(e => e.colecao == "BERMUDAS_E_SHORTS")
  const ps = dados.filter(e => e.plus == true)


  useEffect(() => {
    setDados(firebaseDados())
  }, [])

  return (
    <div>
      <div className='btn btn-danger' onClick={(e) => {
        setDados(firebaseDados().filter(e => e.colecao == "NACIONAL"))
      }}>G</div>

      <Label label='Moda Nacional'></Label>
      <div className='grid'>
        {nacional.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>

      <Label label='Importadas Malha Peruana' ></Label>
      <div className='grid'>
        {imp.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>

      <Label label='Importadas Fio 40.1' ></Label>
      <div className='grid'>
        {if40.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>

      <Label label='Camisetas Polo' ></Label>
      <div className='grid'>
        {cp.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>

      <Label label='Moda Plus Size' ></Label>
      <div className='grid'>
        {ps.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>

      <Label label='Bermudas e Shorts' ></Label>
      <div className='grid' style={{marginBottom:50}}>
        {bs.map(e => {
          return (
            <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod}></ItemCards>
          )
        })}
      </div>



    </div>
  );

}


