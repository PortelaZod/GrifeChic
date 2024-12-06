'use client'
import Image from 'next/image'
import logo from '@/app/layout_imgs/suit.png'
import bagIcon from '@/app/layout_imgs/shopping_bag.png'
import instagranIcon from '@/app/layout_imgs/instagram.png'
import userIcon from '@/app/layout_imgs/user_.png'
import whatsIcon from '@/app/layout_imgs/whatsappIcon.png'
import homeIcon from '@/app/layout_imgs/home.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { doc } from 'firebase/firestore'



function Navbar(x) {

    return (
        <div className='position-sticky top-0 z-2'>
            <div className="navbar bg-light">
                <div className="container-fluid">
                    <Image src={logo} height={30} width={30} alt='logo' className='no_select'></Image>
                    <p className="navbar-brand text-dark h1 no_select m-0 p-0">{x.logo}</p>
                    <div className="user_area d-flex align-items-center justify-content-around">
                        <div className='d-flex me-3'>
                            <Image src={bagIcon} height={30} alt='Shopping Bag' />
                            <p className='text-danger fw-bold m-0'>0</p>
                        </div >

                        <Image src={whatsIcon} height={26} width={26} className='whatsIcon me-3' alt='Whats'></Image>

                        <Image src={instagranIcon} height={26} width={26} className='me-3 d-none d-sm-flex' alt='Whats'></Image>

                        {/* Usuario */}
                        <span className='d-none d-lg-flex flex-row justify-content-center align-items-center'>
                            <Image src={userIcon} alt='User' width={30} height={30}></Image>
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
                    {x.links.map(e => { return <Link className="p-1" href='./sobre' key={e.valor}>{e}</Link> })}
                </div>
            </div>

            {/* sm-navbar */}
            <div className='bg-light w-100 position-fixed bottom-0 border d-flex align-items-center justify-content-around d-lg-none z-3'>
                <a href='' className='d-flex flex-column align-items-center text-decoration-none mt-1'>
                    <Image src={userIcon} alt='User' width={15} height={15} className=''></Image>
                    <p className='m-0 text-dark User'>Perfil</p>
                </a>

                <a href=''><Image src={homeIcon} width={25} height={25} alt='home'></Image></a>

                <a href=''><Image src={instagranIcon} width={25} height={25} alt='insta'></Image></a>
            </div>{/* sm-navbar */}

        </div>
    )
}

export default Navbar