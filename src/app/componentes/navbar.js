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
import searchContext from '../searchContext'
import { Children, useState, useContext } from 'react'




function Navbar(x) {

    function ocultar() {
        document.querySelector('.logo').classList.toggle('d-none')
        document.querySelector('.nome_logo').classList.toggle('d-none')
        document.querySelector('.bag').classList.toggle('d-none')
        document.querySelector('.whatsIcon').classList.toggle('d-none')
        document.querySelector('.search_bar').classList.toggle('d-none')
        document.querySelector('.seachIcon').classList.toggle('d-none')
        document.querySelector('.search').classList.toggle('d-none')
    }

    let addBtns = document.querySelectorAll('.add-btn')
    addBtns.forEach(btn => btn.addEventListener('click', (e) => {
        document.querySelector('.sideBar').classList.remove('outDisplay')
    }))

    return (
        <div className='position-sticky top-0 z-2'>
            <div className="navbar bg-light">
                <div className="container-fluid">
                    <Image className='no_select logo' src={logo} height={25} width={25} alt='logo'></Image>

                    <p className="nome_logo navbar-brand text-dark h1 no_select m-0 p-0">{x.logo}</p>

                    <div className="user_area d-flex align-items-center justify-content-around">

                        <div className='bag d-flex me-2'>
                            <Image src={bagIcon} width={25} height={25} alt='Shopping Bag' />
                            <p className='text-danger fw-bold m-0'>0</p>
                        </div >

                        <Image src={whatsIcon} height={25} width={25} className='whatsIcon me-2' alt='Whats'></Image>

                        <Image src={instagranIcon} height={25} width={25} className='me-2 d-none d-lg-flex' alt='Whats'></Image>

                        <div className='d-flex align-items-center d-md-none '>
                            <input className='search_bar form-control m-auto me-1 d-none' onBlur={(e) => {

                            }}></input>

                            <Image className='search me-2 d-none' src={searchIcon} width={25} height={25} alt='search' onClick={() => {
                                ocultar()
                            }}></Image>
                        </div>

                        <Image className='me-2 seachIcon' src={searchIcon} width={25} height={25} alt='search' onClick={() => {
                            ocultar()
                        }}></Image>

                        {/* Usuario */}
                        <span className='d-none d-lg-flex flex-row justify-content-center align-items-center'>
                            <Image src={userIcon} alt='User' width={25} height={25}></Image>
                            <p className='ms-2 m-0 text-dark User no_select'>Perfil</p>
                        </span>{/* Usuario */}

                    </div>

                    <span className='btn btn-dark bg-black entrar_btn' onClick={(e) => {
                        document.querySelector('.entrar_btn').classList.toggle('d-none')
                        document.querySelector('.sair_btn').classList.toggle('d-none')
                    }}>Entrar</span>
                    <span className='btn btn-danger d-none sair_btn' style={{ width: 68 }} onClick={() => {
                        document.querySelector('.entrar_btn').classList.toggle('d-none')
                        document.querySelector('.sair_btn').classList.toggle('d-none')
                    }}>Sair</span>
                </div>
            </div>

            <div className="links links_desktop d-none d-lg-flex bg-black justify-content-around container-fluid">
                {x.links.map(e => { return <Link className="p-2 fw-bold" href='./sobre' key={e.valor}>{e}</Link> })}
            </div>

            <div className='carousel_links_container d-flex justify-content-around w-100 bg-black d-lg-none'>
                <div className="links bg-black d-flex justify-content-center align-items-center carousel_links">
                    {x.links.map(e => { return <Link className="p-1" href='#imp' key={e.links}>{e}</Link> })}
                </div>
            </div>

            {/* sm-navbar */}
            <div className='bg-light w-100 position-fixed bottom-0 border d-flex align-items-center justify-content-around d-lg-none z-3'>
                <Image src={infoIcon} width={25} height={25} alt='Info'></Image>

                <a href=''><Image src={instagranIcon} width={25} height={25} alt='insta'></Image></a>

                <a href='' className='d-flex flex-column align-items-center text-decoration-none mt-1'>
                    <Image src={userIcon} alt='User' width={15} height={15} className=''></Image>
                    <p className='m-0 text-dark User'>Perfil</p>
                </a>

                <Image src={barIcon} width={25} height={25} alt='menu'></Image>
            </div>{/* sm-navbar */}

            {/* sidebar */}
            <div className='bg-light position-fixed w-100 h-100 z-3 d-flex sideBar outDisplay'>
                <div className='card'>
                    <Image className='card-img-top' src={''} fill alt='item'></Image>
                </div>

                <span className='position-absolute bottom-0 mb-3 w-100 d-flex justify-content-around align-itens-center'>
                    <span className='btn btn-danger' onClick={(e) => {
                        e.target.parentElement.parentElement.classList.add('outDisplay')
                    }}>Voltar</span>
                    <span className='btn btn-dark' >Adicionar</span>
                </span>
            </div>{/* sidebar */}

        </div>
    )
}

export default Navbar
