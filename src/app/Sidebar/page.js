'use client'
import React, { useState, useContext } from "react";
import { ContextoItem } from '@/app/contextos/contextoItem'
import { MainContext } from '@/app/contextos/contexto'
import suit from '@/app/layout_imgs/suit-bakcground.png'
import Image from "next/image";
import Link from "next/link";



export default function SideBar(x) {
    const [grade, setGrade] = useState(null)
    const [item, setItem] = useContext(ContextoItem);

    return (
        <div className='bg-light position-fixed top-0 w-100 h-100 z-3 d-flex sideBar'>
            <div className='card w-100'>
                <Image className='card-img-top object-fit-cover' src={item != null ? item.img : suit} width={250} height={300} alt='item'></Image>

                <div className='card-body'>
                    <p className='card-title'>{item != null ? item.nome : null}</p>
                    {item != null ? item.grade.map(e => <div key={e.length} className='btn btn-dark me-2' onClick={(btn) => {
                        setGrade(btn.target.innerHTML)
                    }}>{e}</div>) : null}
                    <p className='m-1'>{`R$ ${item != null ? item.preco : null}`}</p>
                </div>
            </div>


            <span className='position-absolute bottom-0 mb-3 w-100 d-flex justify-content-around align-itens-center'>
                <Link href='/' className='btn btn-danger' onClick={(e) => {

                }}>Voltar</Link>

                {/* adicionar Item sacola */}
                <span className='btn btn-dark' onClick={() => {
                    let _item = {
                        nome: item.nome,
                        preco: item.preco,
                        grade: grade,
                        img: item.img,
                    }

                    console.log(_item)
                }}>Adicionar</span>
            </span> {/* adicionar Item sacola */}

        </div>
    )
}

