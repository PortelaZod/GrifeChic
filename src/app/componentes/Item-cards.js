'use client'
import Image from "next/image"
import {MainContext} from '@/app/contexto'
import { useContext } from "react"
import css from "styled-jsx/css"



function ItemCards(x) {
    return (
        <div >
            <div className="cd1 card">
                <div className="img-container">
                <Image className="card-img-top item-img" src={x.img} width={150} height={150} alt="Camiseta" onLoad={(e)=>{
                    // setDisplay('d-none')
                }}></Image>
                </div>
                <div className="card-body">
                    <p className="card-title item-nome mb-1 lh-sm" style={{userSelect:'none'}}>{x.nome}</p>
                    <p className="item-grade text-secondary mb-1" style={{userSelect:'none'}}>{`${x.grade}`.replaceAll(',',' | ')}</p>
                    <p className="item-cod d-none d-md-flex text-secondary mb-1">{`Cod: ${x.cod}`}</p>
                    <p className="card-text text-dark item-preco mb-2" style={{userSelect:'none'}}>{`R$ ${x.preco}`}</p>
                    <div className='btn btn-dark item-btn d-flex align-items-center justify-content-center add-btn' onClick={(e)=>{
                        console.log(x)
                    }}> Adicionar <Image src='/layout_imgs/bag.png' className="ms-1" width={20} height={20} alt="não Encontrada" ></Image></div>
                </div>
            </div>
        </div>
    )
}

export default ItemCards