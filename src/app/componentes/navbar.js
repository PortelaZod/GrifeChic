'use client'
import Image from 'next/image'
import logo from '@/app/layout_imgs/suit.png'
import bagIcon from '@/app/layout_imgs/shopping_bag.png'
import instagranIcon from '@/app/layout_imgs/instagram.png'
import userIcon from '@/app/layout_imgs/user_.png'
import whatsIcon from '@/app/layout_imgs/whatsappIcon.png'
import infoIcon from '@/app/layout_imgs/information-button.png'
import barIcon from '@/app/layout_imgs/Menu_Bar.png'
import searchIcon from '@/app/layout_imgs/search.png'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { MainContext } from '@/app/contextos/contexto.js'
import Moda_nacional from '../camisetas_nacionais/page'
import { ContextoItem } from '../contextos/contextoItem'

function paths(x) {
    switch (true) {
        case (x == 0):
            return '/camisetas_nacionais'
        case (x == 1):
            return 'importadas_malha_peruana'
        case (x == 2):
            return 'importadas_fio_40.1'
        case (x == 3):
            return 'camisetas_polo'
        case (x == 4):
            return 'moda_plus_size'
        case (x == 5):
            return 'bermudas_&_shorts'
        case (x == 6):
            return 'moda_intima'
        default:
            return ''
    }

}

function Navbar(x) {
    return (
        <div className='position-sticky top-0 z-2'>
            <div className="navbar bg-light">
                <div className="container-fluid">
                    <Link href={'/'}><Image className='no_select logo' src={logo} height={25} width={25} alt='logo'></Image></Link>

                    <p className="nome_logo navbar-brand text-dark h1 no_select m-0 p-0">{x.logo}</p>

                    <div className="user_area d-flex align-items-center justify-content-around">

                        <div className='bag d-flex me-2'>
                            <Image src={bagIcon} width={25} height={25} alt='Shopping Bag' />
                            <p className='text-danger fw-bold m-0'>0</p>
                        </div >

                        <Image src={whatsIcon} height={25} width={25} className='whatsIcon me-2' alt='Whats'></Image>

                        <Image src={instagranIcon} height={25} width={25} className='me-2 d-none d-lg-flex' alt='Whats'></Image>

                        <Image className='me-2 seachIcon' src={searchIcon} width={25} height={25} alt='search' onClick={() => {
                            document.querySelector('.search_bar').classList.toggle('d-none')
                        }}></Image>

                        {/* Usuario */}
                        <span className='d-none d-lg-flex flex-row justify-content-center align-items-center'>
                            <Image src={userIcon} alt='User' width={25} height={25}></Image>
                            <p className='ms-2 m-0 text-dark User no_select'>{'Perfil'}</p>
                        </span>{/* Usuario */}

                    </div>

                    {/* botões login e logout */}
                    <span className='btn btn-dark bg-black entrar_btn' onClick={(e) => {
                        document.querySelector('.entrar_btn').classList.toggle('d-none')
                        document.querySelector('.sair_btn').classList.toggle('d-none')

                    }}>Entrar</span>
                    <span className='btn btn-danger d-none sair_btn' style={{ width: 68 }} onClick={() => {
                        document.querySelector('.entrar_btn').classList.toggle('d-none')
                        document.querySelector('.sair_btn').classList.toggle('d-none')
                    }}>Sair</span>{/* botões login e logout */}

                </div>
            </div>

            {/* Barra de pesquisa */}
            <div className=' search_bar d-flex align-items-center d-none d-md-none bg-light'>
                <input className='form-control m-2 me-1' placeholder='Pesquisar Item' onBlur={(e) => {
                }}></input>
                <Image className='search me-3 ms-2' src={searchIcon} width={25} height={25} alt='search' onClick={() => {

                }}></Image>
            </div> {/* Barra de pesquisa */}

            {/* Barra de links desktop */}
            <div className="links links_desktop d-none d-lg-flex bg-black justify-content-around container-fluid">
                {x.links.map(e => { return <Link className="p-2 fw-bold" href='./sobre' key={e.id}>{e.link}</Link> })}
            </div>{/* Barra de links desktop */}

            {/* Barra de links mobile */}
            <div className='carousel_links_container d-flex justify-content-around w-100 bg-black d-lg-none'>
                <div className="links bg-black d-flex justify-content-center align-items-center carousel_links">
                    {x.links.map(e => { return <Link className="p-1" href={paths(e.id)} key={e.id}>{e.link}</Link> })}
                </div>
            </div>{/* Barra de links mobile */}

            {/* footer mobile */}
            <div className='bg-light w-100 position-fixed bottom-0 border d-flex align-items-center justify-content-around d-lg-none z-3'>
                <Image src={infoIcon} width={25} height={25} alt='Info'></Image>

                <a href=''><Image src={instagranIcon} width={25} height={25} alt='insta'></Image></a>

                <a href='' className='d-flex flex-column align-items-center text-decoration-none mt-1'>
                    <Image src={userIcon} alt='User' width={15} height={15} className=''></Image>
                    <p className='m-0 text-dark User'>{'Perfil'}</p>
                </a>

                <Image src={barIcon} width={25} height={25} alt='menu'></Image>
            </div>{/* footer mobile */}

        </div>
    )
}


export default Navbar
