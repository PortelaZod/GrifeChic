'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCards from './componentes/Item-cards.js';
import Label from './componentes/label-block.js';
import Navbar from './componentes/navbar.js';
import { db } from './componentes/Firebase.js';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import Image from 'next/image.js';
import Banner from '@/app/componentes/Mbanner.js'
import imgBanner from '@/app/layout_imgs/carousel.jpeg'
import imgBanner2 from '@/app/layout_imgs/Promo Black FRIDAY.jpeg'
import imgBanner3 from '@/app/layout_imgs/Carousel_whtas.jpeg'
import LoadingAnimation from '@/app/componentes/loading.js'



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

      <Banner src={imgBanner}></Banner>

      <Label label='Camisetas Nacionais'></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {nacional.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Importadas Malha Peruana' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {imp.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Itens em Oferta' ></Label>
      <Banner src={imgBanner2}></Banner>

      <Label label='Importadas Fio 40.1' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {if40.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Camisetas Polo' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {cp.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Atendimento' ></Label>
      <Banner src={imgBanner3}></Banner>

      <Label label='Moda Plus Size' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2'>
          {ps.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

      <Label label='Bermudas e Shorts' ></Label>
      <div className='overFlowContainer'>
        <div className='row_ ms-2 mb-5'>
          {bs.map(e => {
            return (
              <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} cod={e.cod} key={e.cod}></ItemCards>
            )
          })}
        </div>
      </div>

    </div >
  );

}


