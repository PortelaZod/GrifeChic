'use client'
import Image from "next/image"
import {MainContext} from '@/app/contexto'
import { useContext } from "react"
import css from "styled-jsx/css"



function ItemCards(x){

    const [user,setUser] = useContext(MainContext);

    return (
        <div onClick={()=>{
            console.log(x)
            setUser(x)
        }}>
            <div className="cd1 card">
                <div className="img-container">
                <Image className="card-img-top item-img" src={x.img} width={150} height={150} alt="Camiseta"></Image>
                </div>
                <div className="card-body" style={{width:150}}>
                    <p className="card-title item-nome mb-1 lh-sm" style={{userSelect:'none'}}>{x.nome}</p>
                    <p className="item-grade text-secondary mb-1" style={{userSelect:'none'}}>{`${x.grade}`.replaceAll(',',' | ')}</p>
                    <p className="item-cod d-none d-md-flex text-secondary text-wrap mb-1"style={{userSelect:'none'}}>{`Cod: ${x.cod}`}</p>
                    <p className="card-text text-dark item-preco mb-2" style={{userSelect:'none'}}>{`R$ ${x.preco}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCards